import { ArrowRight, Calendar } from 'lucide-react';

export default function News() {
  const articles = [
    {
      type: 'Campanie',
      title: 'Campania de Paște: Împreună pentru fiecare copil',
      excerpt: 'Susținem 100 de copii cu autism să acceseze terapiile necesare',
      image: 'https://images.pexels.com/photos/8613316/pexels-photo-8613316.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Mar 2025',
    },
    {
      type: 'Articol',
      title: 'Cum recunoști semnele autismului la copilul tău',
      excerpt: 'Ghid complet pentru părinți: simptome și pașii următori',
      image: 'https://images.pexels.com/photos/8613025/pexels-photo-8613025.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '10 Mar 2025',
    },
    {
      type: 'Eveniment',
      title: 'Workshop pentru părinți: Comunicarea nonverbală',
      excerpt: 'Înscrie-te la următorul nostru training gratuit',
      image: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '5 Mar 2025',
    },
    {
      type: 'Poveste',
      title: 'Povestea Anei: De la izolare la integrare',
      excerpt: 'Cum Ana a devenit lider în clasa ei',
      image: 'https://images.pexels.com/photos/8613023/pexels-photo-8613023.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '1 Mar 2025',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimele noutăți
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rămâi la curent cu acțiunile și inițiativele noastre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold text-[#00B8B0] uppercase tracking-wide">
                    {article.type}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#00B8B0] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="flex items-center gap-2 text-[#00B8B0] font-semibold group-hover:gap-3 transition-all">
                  Citește mai mult
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 border border-gray-200">
            Vezi toate noutățile
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
