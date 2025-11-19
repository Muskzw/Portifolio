
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-8 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} Muskzw. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Muskzw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
