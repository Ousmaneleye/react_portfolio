import { useState, useEffect } from 'react';
import {
  SiDjango,
  SiAngular,
  SiReact,
  SiN8N,
  SiMysql,
  SiFigma,
  SiLinkedin,
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Layout,
  Award,
  MapPin,
  Download,
  ExternalLink,
  GraduationCap,
  Medal,
  Shield,
  Github,
  Star,
  GitBranch,
  Smartphone,
  BookOpen,
  X,
  Image as ImageIcon,
  Wrench,
  Cpu,
  Phone,
} from 'lucide-react';

// --- CONFIGURATION ---
const GITHUB_USERNAME = 'makhtar2'; // Ton pseudo GitHub

export default function App() {
  const [githubRepos, setGithubRepos] = useState([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Récupération automatique GitHub
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setGithubRepos(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // --- 1. PROJETS & EXPÉRIENCES (Expandable Cards) ---
  const projects = [
    {
      id: 'julo',
      title: 'Startup JULO',
      role: 'Fondateur & Designer',
      period: 'Depuis 2023',
      desc: 'Agence digitale complète : prospection, identité visuelle et développement.',
      longDesc:
        "Fondateur de JULO. Je gère l'activité de A à Z : prospection client, gestion de projet, facturation et livraison. Création d'identités visuelles complètes (logos, chartes) et développement de sites web.",
      cover: '/public/images/profil.jpeg',
      tags: ['Entrepreneuriat', 'Branding', 'React', 'Node.js'],
      gallery: ['/public/images/profil.jpeg', '/public/images/profil.jpeg'],
    },
    {
      id: 'ept',
      title: 'Stage EPT-THIES',
      role: 'Stagiaire Informatique',
      period: 'Stage Académique',
      desc: "Maintenance du parc informatique et assistance technique à l'École Polytechnique.",
      longDesc:
        "Expérience pratique au sein de l'École Polytechnique de Thiès (EPT). J'y ai appris la maintenance informatique (hardware/software), le diagnostic de pannes réseaux et la gestion de parc. Une immersion technique rigoureuse.",
      cover:
        'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800', // Image Maintenance
      tags: ['Maintenance', 'Réseaux', 'Support Technique'],
      gallery: [
        'https://images.unsplash.com/photo-1597852074816-d933c722b99e?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
      ],
    },
    {
      id: 'ucak',
      title: 'Université CAK',
      role: 'Designer Freelance',
      period: 'Depuis 2024',
      desc: "Conception de tous les supports de communication visuelle de l'université.",
      longDesc:
        "Designer graphique officiel pour l'Université Cheikh Ahmadoul Khadim (UCAK) à Touba. Conception des affiches, bannières web et publications réseaux sociaux pour les grands événements académiques.",
      cover:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800',
      tags: ['Adobe Photoshop', 'Illustrator', 'Communication'],
      gallery: [
        'https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600',
      ],
    },
    {
      id: 'hack',
      title: 'Prix & Hackathons',
      role: 'Lauréat & Mentor',
      period: '2024 - 2025',
      desc: '1er Prix Sonatel (Touba), 2ème Prix Rio Digital Show, Mentor Sonatel Academy.',
      longDesc:
        "Parcours compétitif : 1ère Place au Hackathon Sonatel à Touba (2024), 2ème Place au Rio Digital Show à Rufisque (2025). J'ai aussi été Mentor/Coach technique pour le Hackathon Sonatel Academy (2025) et contribué à l'étude d'impact du Grand Magal.",
      cover:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      tags: ['Innovation', 'Pitch', 'Leadership', 'n8n'],
      gallery: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1475721027767-p4fa986235fe?auto=format&fit=crop&q=80&w=600',
      ],
    },
  ];

  // --- 2. CERTIFICATIONS (Données complètes du CV) ---
  const certifications = [
    {
      title: 'CCNA: Enterprise Networking',
      issuer: 'Cisco',
      year: '2025',
      icon: <Shield className="text-emerald-400" />,
      tag: 'Réseaux & Sécurité',
    },
    {
      title: 'Licence Informatique (L3)',
      issuer: 'UCAK Touba',
      year: 'En cours',
      icon: <GraduationCap className="text-amber-400" />,
      tag: 'Académique',
    },
    {
      title: 'Marketing Digital',
      issuer: 'FORCEN',
      year: '2025',
      icon: <Medal className="text-blue-400" />,
      tag: 'Business',
    },
    {
      title: 'Dev. Mobile Android',
      issuer: 'Tactical Tech / Goethe',
      year: '2022',
      icon: <Smartphone className="text-purple-400" />,
      tag: 'Mobile',
    },
    {
      title: 'Appathon for Good',
      issuer: 'MIT App Inventor',
      year: '2021',
      icon: <Award className="text-red-400" />,
      tag: 'International',
    },
    {
      title: 'Engineering For The Week',
      issuer: 'Facebook (Meta)',
      year: '2021',
      icon: <Cpu className="text-blue-500" />,
      tag: 'Innovation',
    },
    {
      title: 'Baccalauréat S2',
      issuer: 'Lycée Malick SY',
      year: '2022',
      icon: <BookOpen className="text-slate-400" />,
      tag: 'Sciences',
    },
  ];
  const Tech = ({ name }) => {
    return <div></div>;
  };
  // --- 3. COMPÉTENCES TECHNIQUES (Mise à jour avec Django, Angular, n8n) ---
  const techStack = [
    {
      name: 'React / JS',
      icon: <SiReact size={18} />,
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      name: 'Django / Python',
      icon: <SiDjango size={18} />,
      color: 'bg-green-600/10 text-green-500',
    },
    {
      name: 'Angular',
      icon: <SiAngular size={18} />,
      color: 'bg-red-500/10 text-red-500',
    },
    {
      name: 'n8n Automation',
      icon: <SiN8N size={18} />,
      color: 'bg-pink-500/10 text-pink-400',
    },
    {
      name: 'Maintenance IT',
      icon: <Wrench size={18} />,
      color: 'bg-slate-500/10 text-slate-300',
    },
    {
      name: 'MySQL / PHP',
      icon: <SiMysql size={18} />,
      color: 'bg-orange-500/10 text-orange-400',
    },
    {
      name: 'Figma / Adobe',
      icon: <SiFigma size={18} />,
      color: 'bg-purple-500/10 text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* BACKGROUND PREMIUM */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-0 w-[600px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 flex justify-between items-center z-50 shadow-2xl">
        <span className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          MW<span className="text-emerald-500 text-2xl">.</span>
        </span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a
            href="#projets"
            className="hover:text-emerald-400 transition-colors"
          >
            Expériences
          </a>
          <a
            href="#skills"
            className="hover:text-emerald-400 transition-colors"
          >
            Stack
          </a>
          <a
            href="#certifs"
            className="hover:text-emerald-400 transition-colors"
          >
            Diplômes
          </a>
        </div>
        <a
          href="mailto:makhtar2gsm@gmail.com"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-900/20"
        >
          Me Contacter
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Stagiaire & Freelance Disponible
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Makhtar Wade<span className="text-emerald-500">.</span>
          </h1>
          <h2 className="text-2xl text-slate-300 mb-8 font-light">
            Étudiant Entrepreneur &{' '}
            <span className="text-amber-400 font-medium">
              Développeur Fullstack
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
            J'allie expertise technique (Django, Angular, Maintenance) et
            créativité visuelle. Basé à Thiès et Touba, je transforme des défis
            complexes en solutions digitales.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-8 justify-center md:justify-start">
            <span className="flex items-center gap-1">
              <MapPin size={16} /> Thiès / Touba
            </span>
            <span className="flex items-center gap-1">
              <Phone size={16} /> +221 75 446 90 97
            </span>
            <span className="flex items-center gap-1">
              <SiLinkedin size={16} /> makhtar wade
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projets"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Mon Parcours <ArrowRight size={18} />
            </a>
            <button className="px-8 py-4 border border-slate-700 text-slate-300 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Download size={18} /> CV PDF
            </button>
          </div>
        </motion.div>

        {/* PHOTO PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-slate-800">
            {/* Remplace l'URL ci-dessous par ta vraie photo de profil */}
            <img
              src="/public/images/profil.jpeg"
              alt="Makhtar Wade"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-emerald-400">
              JULO Founder
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. STACK TECHNIQUE */}
      <section
        id="skills"
        className="py-10 border-y border-white/5 bg-slate-900/30"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 text-slate-400 text-sm uppercase tracking-widest">
            Stack Technique & Outils
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 ${tech.color} font-medium`}
              >
                {tech.icon} {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJETS & EXPÉRIENCES (DYNAMIQUE) */}
      <section id="projets" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
            <Layout className="text-emerald-400" /> Expériences & Réalisations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj) => (
              <motion.div
                layoutId={proj.id}
                key={proj.id}
                onClick={() => setSelectedId(proj.id)}
                className="group rounded-3xl overflow-hidden bg-slate-800 border border-white/5 cursor-pointer hover:border-emerald-500/50 transition-colors flex flex-col"
              >
                <motion.div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                    <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Voir Détails
                    </span>
                  </div>
                  <motion.img
                    src={proj.cover}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6 flex-1 flex flex-col">
                  <motion.div className="text-[10px] font-bold text-emerald-400 uppercase mb-1">
                    {proj.period}
                  </motion.div>
                  <motion.h3 className="text-lg font-bold text-white mb-1">
                    {proj.title}
                  </motion.h3>
                  <motion.div className="text-sm text-amber-400 mb-2">
                    {proj.role}
                  </motion.div>
                  <motion.p className="text-slate-400 text-xs mb-4 line-clamp-3">
                    {proj.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODALE DYNAMIQUE (DÉTAILS PROJETS) */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            {projects.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    layoutId={item.id}
                    key={item.id}
                    className="w-full max-w-4xl max-h-[90vh] bg-[#0F172A] rounded-3xl overflow-y-auto border border-white/10 relative z-10 shadow-2xl flex flex-col md:flex-row"
                  >
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <div className="w-full md:w-2/5 p-8 bg-slate-900 border-r border-white/5 flex flex-col">
                      <motion.h2 className="text-2xl font-bold text-white mb-1">
                        {item.title}
                      </motion.h2>
                      <motion.div className="text-emerald-400 font-bold mb-4">
                        {item.role}
                      </motion.div>
                      <motion.p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {item.longDesc}
                      </motion.p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-3/5 p-8 bg-[#0F172A]">
                      <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
                        Aperçu Visuel
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.gallery.map((img, i) => (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            key={i}
                            className="rounded-xl overflow-hidden h-40 border border-white/5"
                          >
                            <img
                              src={img}
                              alt="Galerie"
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </div>
        )}
      </AnimatePresence>

      {/* 5. GITHUB AUTOMATIQUE */}
      <section id="github" className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <Github className="text-white" /> Open Source
            </h2>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              className="text-sm text-slate-400 hover:text-white flex items-center gap-1"
            >
              Voir GitHub <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo: any) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  className="bg-slate-800/30 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <BookOpen
                      className="text-slate-400 group-hover:text-emerald-400 transition-colors"
                      size={20}
                    />
                    <div className="text-xs font-mono text-slate-500">
                      {repo.language}
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors truncate">
                    {repo.name}
                  </h3>
                  <div className="flex gap-4 text-xs text-slate-500 font-mono mt-4">
                    <span className="flex items-center gap-1">
                      <Star size={10} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch size={10} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-3 text-center text-slate-500">
                Chargement des dépôts GitHub...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. DIPLÔMES & CERTIFICATIONS (COMPLET) */}
      <section id="certifs" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Parcours & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-800/40 border border-white/5 p-5 rounded-2xl flex items-center gap-4 hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center border border-white/10 text-slate-300">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg leading-tight">
                  {cert.title}
                </h4>
                <div className="text-emerald-400 text-sm">{cert.issuer}</div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-slate-500 text-xs font-mono bg-white/5 px-2 py-1 rounded">
                  {cert.year}
                </div>
                <div className="text-slate-600 text-[10px] mt-1 uppercase tracking-wide">
                  {cert.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center bg-slate-900 text-slate-500 text-sm">
        © 2025 Makhtar Wade. Fait avec passion au Sénégal.
      </footer>
    </div>
  );
}
