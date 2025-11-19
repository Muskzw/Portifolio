
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
    {
        icon: <Layout size={24} />,
        title: "Frontend Development",
        description: "Building responsive and interactive UIs with React, Tailwind, and Next.js."
    },
    {
        icon: <Database size={24} />,
        title: "Backend Development",
        description: "Creating robust APIs and server-side logic with Node.js, Express, and Databases."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile First",
        description: "Ensuring applications look and feel great on all devices and screen sizes."
    },
    {
        icon: <Code2 size={24} />,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code following best practices."
    }
];

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0" />
                    <p className="mt-8 text-slate-400 max-w-2xl leading-relaxed">
                        I am a dedicated developer with a passion for building software that solves real-world problems.
                        With a strong foundation in modern web technologies, I strive to create intuitive and efficient user experiences.
                        I am constantly learning and evolving my skills to stay ahead in the fast-paced tech landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-xl border border-slate-800 hover:border-accent/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                                <div className="text-accent">{skill.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                            <p className="text-slate-400 text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
