
import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal } from 'lucide-react';

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent font-medium mb-4 tracking-wide">HELLO, I'M EVIDENCE FELIX SITHOLE</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Digital Experiences</span> that Matter.
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I'm a passionate developer focused on creating accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent-hover transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:border-accent hover:text-accent transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-2xl rotate-6 backdrop-blur-sm" />
                        <div className="absolute inset-0 bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-2">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-blue-400">developer</span>
                                    <span className="text-slate-400">=</span>
                                    <span className="text-yellow-300">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">name:</span>
                                    <span className="text-green-400">'Muskzw'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">skills:</span>
                                    <span className="text-yellow-300">['React', 'TypeScript', 'Node.js']</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">hardWorker:</span>
                                    <span className="text-orange-400">true</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-slate-400">problemSolver:</span>
                                    <span className="text-orange-400">true</span>
                                </div>
                                <div className="text-yellow-300">{'}'}</div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl"
                        >
                            <Code className="text-accent" size={32} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl"
                        >
                            <Terminal className="text-blue-500" size={32} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
