import { FileText, MessageSquare, Percent, Heart, Users, Building2 } from 'lucide-react';

export default function GetInvolved() {
  const ways = [
    {
      icon: FileText,
      title: 'Formular 230',
      description: 'Redirecționează 3.5% din impozit',
    },
    {
      icon: MessageSquare,
      title: 'Donează prin SMS',
      description: 'Trimite un SMS la 8864',
    },
    {
      icon: Percent,
      title: 'Redirecționează 20%',
      description: 'Program pentru companii',
    },
    {
      icon: Heart,
      title: 'Donează',
      description: 'Donație recurentă sau unică',
    },
    {
      icon: Users,
      title: 'Fii voluntar',
      description: 'Alătură-te echipei noastre',
    },
    {
      icon: Building2,
      title: 'Implică-ți compania',
      description: 'Parteneriate CSR',
    },
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cum te poți implica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Îți mulțumim că ești alături de noi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-14 h-14 bg-[#00B8B0] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <way.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {way.title}
              </h3>
              <p className="text-gray-600 mb-4">{way.description}</p>
              <button className="text-[#00B8B0] font-semibold hover:underline">
                Află mai mult →
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Hai să schimbăm povești împreună
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Orice contribuție, mare sau mică, face diferența în viața unui copil cu autism
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#E23E8E] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#c9357a] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                Donează acum
              </button>
              <button className="bg-[#00B8B0] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#00a39c] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                Devino voluntar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
