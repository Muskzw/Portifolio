import { useState, useEffect } from 'react';

export interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    language: string | null;
    topics: string[];
    created_at: string;
    updated_at: string;
}

export function useGitHubRepos(username: string) {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('User not found');
                    }
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();
                // Filter out forks if desired, or keep them. For now, we keep everything but sort by stars/updated.
                // Let's sort by stars descending, then updated.
                const sorted = data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);

                setRepos(sorted);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
}
