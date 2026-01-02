import { useState, useEffect } from 'react';
import { Github, Star, Folder } from 'lucide-react';

export default function GithubStats() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repos, setRepos] = useState<any[]>([]);

  // ✅ Ton pseudo est configuré ici
  const username = 'makhtar2';

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // On filtre pour ne pas afficher les forks si tu veux que tes projets perso
          // et on prend les 3 plus récents
          setRepos(data.slice(0, 3));
        }
      })
      .catch((err) => console.error('Erreur GitHub:', err));
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 text-white">
        <Github size={20} className="text-blue-400" />
        <h3 className="font-bold">Activité Récente</h3>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 hover:border-blue-500/50 transition-all"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Folder size={14} className="text-blue-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-blue-300 transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                {repo.stargazers_count > 0 && (
                  <div className="flex gap-3 text-[10px] text-slate-500 shrink-0">
                    <span className="flex items-center gap-1">
                      <Star size={10} /> {repo.stargazers_count}
                    </span>
                  </div>
                )}
              </div>
              {/* Description (si elle existe) */}
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 pl-6">
                {repo.description || 'Voir le code source...'}
              </p>
            </a>
          ))
        ) : (
          <div className="text-slate-500 text-sm italic py-4 text-center">
            Chargement des repos de Makhtar...
          </div>
        )}
      </div>
    </div>
  );
}
