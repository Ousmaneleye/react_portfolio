import { useState, useEffect } from 'react';
import {
  SiDjango, SiReact, SiMysql, SiPython,
  SiLinux, SiExpress, SiNodedotjs, SiHtml5, SiArduino, SiGithub,
  SiGnubash,
  SiCplusplus,
  SiThemoviedatabase,
  SiPostman,
  SiSelenium
} from 'react-icons/si';
import { motion } from 'framer-motion';
import {
  MapPin, GraduationCap, Medal, Github, Mail, Phone,
  Database, Cpu, Code2, ExternalLink, Linkedin, BookOpen, Share2,
  Globe,
  Shield
} from 'lucide-react';

export default function App() {
  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/Ousmaneleye/repos?sort=updated&per_page=4`)
      .then((res) => res.json())
      .then((data) => { if (Array.isArray(data)) setGithubRepos(data); })
      .catch((err) => console.error(err));
  }, []);

  const certifications = [
    {
    title: 'Python : des fondamentaux aux concepts avancés',
    issuer: "Université Côte d'Azur et Inria",
    date: 'Juil. 2025',
    id: '58edf176e2a818c5146788727763d2fd9b7f01c9',
    icon: <SiPython className="text-yellow-400" />,
    // Lien Open Badge Factory ajouté ci-dessous
    url: "https://openbadgefactory.com/v1/assertion/58edf176e2a818c5146788727763d2fd9b7f01c9.html"
  },
    { title: 'Python (Basic)', issuer: 'HackerRank', year: '2021', id: 'E5F522D1323A', icon: <SiPython className="text-yellow-400" /> },
    { title: 'Data Analysis with Python', issuer: 'IBM', year: '2022', id: '2a5c3bbb7cbe', icon: <Database className="text-blue-400" /> },
    { title: 'Python 101 for Data Science', issuer: 'IBM', year: '2022', id: '075f9c3acf25', icon: <Cpu className="text-indigo-400" /> },
    { title: 'Marketing Numérique', issuer: 'Google', year: '2022', id: 'TRK FDY NYG', icon: <Medal className="text-red-400" /> }
  ];

  const skillGroups = [
    {
      title: "Programmation & Backend",
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Node.js / Express.js', icon: <SiNodedotjs /> },
        { name: 'MySQL / PostgreSQL / SQLite', icon: <SiThemoviedatabase /> },
        { name: 'Architecture & Test API (Postman)', icon: <SiPostman /> },
      ]
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'React Native (Mobile)', icon: <SiReact /> },
        { name: 'HTML5 / CSS3 / JS', icon: <SiHtml5 /> },
        { name: 'Web Scraping (Selenium/BS4)', icon: <SiSelenium /> }
      ]
    },
    {
      title: "Systèmes & Sécurité",
      skills: [
        { name: 'Sécurité API (JWT, OAuth2)', icon: <Shield size={16} /> }, // Ajouté ici
        { name: 'Administration Linux / Bash', icon: <SiLinux /> },
        { name: 'Git & CI/CD Basics', icon: <SiGithub /> }
      ]
    },
    { title: "Compétences Complémentaires",
      skills: [
        { name: 'Analyse de Données', icon: <Database /> },
        { name: 'Cybersécurité', icon: <Code2 /> },
        { name: 'Marketing Numérique', icon: <Medal /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter">O. LEYE<span className="text-blue-500">.</span></span>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/ousmane-leye-407768199/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ousmaneleye2001@gmail.com" className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold mb-6">
            <BookOpen size={14} /> ÉTUDIANT EN INFORMATIQUE & TÉLÉCOMS
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
            Ousmane <br />LEYE<span className="text-blue-500">.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
            Étudiant en <span className="text-white font-medium">Licence 3 Informatique & Télécoms à l'UCAK</span>, 
            je suis un développeur <span className="text-blue-400 font-medium">Fullstack</span> passionné par l'ingénierie logicielle. 
            Spécialisé dans la conception d'architectures <span className="text-white font-medium">API sécurisées</span> et la gestion intelligente des <span className="text-white font-medium">Data</span>, 
            j'appuie mon expertise technique sur des <span className="text-blue-400 font-medium">certifications internationales</span> (IBM, Inria, Google) 
            pour livrer des solutions robustes, de l'automatisation Backend aux interfaces mobiles.
          </p>
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm text-slate-500 mb-10">
            <span className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={16} className="text-blue-500" /> Touba, Sénégal</span>
            <a href="tel:+221773141859" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={16} className="text-blue-500" /> +221 77 314 18 59</a>
            <a href="mailto:ousmaneleye2001@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={16} className="text-blue-500" /> ousmaneleye2001@gmail.com</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
            <img
              src="/images/ousmaneleye.png"
              alt="Ousmane Leye"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-slate-500 uppercase text-xs font-black tracking-widest mb-6 border-l-2 border-blue-500 pl-4">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between p-4 bg-slate-800/20 rounded-2xl border border-white/5 hover:bg-slate-800/40 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 group-hover:scale-110 transition-transform">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications & Formation</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-6 p-6 bg-slate-800/30 border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
                <div className="w-14 h-14 flex-shrink-0 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 text-3xl shadow-xl group-hover:text-blue-400 transition-colors">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{cert.title}</h4>
                  <p className="text-blue-400 text-sm font-medium">{cert.issuer} • {cert.year}</p>
                  <code className="text-[10px] text-slate-500 mt-2 block bg-black/20 p-1 px-2 rounded w-fit italic">ID: {cert.id}</code>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-3xl flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="text-white" size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-white">License 3 Informatique et Télécoms</h4>
              <p className="text-slate-400 font-medium">Université Cheikh Ahmadoul Khadim Touba (UCAK)</p>
              <p className="text-blue-400 text-sm mt-1">Année académique 2025-2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <Github className="text-blue-500" /> Open Source
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {githubRepos.map((repo: any) => (
            <a href={repo.html_url} target="_blank" key={repo.id} className="p-6 bg-slate-800/20 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{repo.name}</h4>
                <ExternalLink size={16} className="text-slate-600" />
              </div>
              <p className="text-slate-500 text-xs leading-relaxed h-8 line-clamp-2">{repo.description || "Project in development"}</p>
              <div className="mt-4">
                <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded uppercase">{repo.language || 'Code'}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-6 italic text-slate-400">"Transformer les données en insights, et le code en solutions."</h3>
          <div className="flex justify-center gap-6 mb-10">
            <a href="https://www.linkedin.com/in/ousmane-leye-407768199/" target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5">
              <Share2 size={18} /> Suivre sur LinkedIn
            </a>
          </div>
          <p className="text-slate-600 text-xs uppercase tracking-[0.2em]">Ousmane LEYE — © 2026 Touba, Sénégal</p>
        </div>
      </footer>
    </div>
  );
}