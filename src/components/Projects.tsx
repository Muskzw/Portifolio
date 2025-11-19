
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';

export function Projects() {
    const { repos, loading, error } = useGitHubRepos('Muskzw');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-400 py-20">
                Error loading projects: {error}
            </div>
        );
    }

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent rounded-full" />
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {repos.map((repo) => (
                        <motion.div
                            key={repo.id}
                            variants={item}
                            className="glass-card rounded-xl p-6 flex flex-col h-full group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-accent/10 transition-colors">
                                    <Github className="text-accent" size={24} />
                                </div>
                                <div className="flex gap-3">
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                {repo.name}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                                {repo.description || "No description available for this project."}
                            </p>

                            <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-700/50">
                                <div className="flex items-center gap-4">
                                    {repo.language && (
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-accent" />
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Star size={14} />
                                        {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={14} />
                                        0
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
