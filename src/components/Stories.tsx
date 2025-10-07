import { Quote, ArrowRight } from 'lucide-react';

export default function Stories() {
  const stories = [
    {
      name: 'Andrei, 7 ani',
      quote: 'Înainte nu puteam să comunic. Acum vorbesc cu familia mea și am prieteni.',
      image: 'https://images.pexels.com/photos/8612999/pexels-photo-8612999.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Maria, mama Sofiei',
      quote: 'Help Autism ne-a dat speranța că Sofia va putea trăi o viață independentă.',
      image: 'https://images.pexels.com/photos/8613098/pexels-photo-8613098.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'David, 12 ani',
      quote: 'Mi-am descoperit pasiunea pentru desen. Vreau să devin artist.',
      image: 'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Povești care inspiră
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fiecare copil are o poveste unică de succes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Quote className="w-8 h-8 text-[#00B8B0] mb-4" />
                <p className="text-gray-700 text-lg mb-4 italic">
                  "{story.quote}"
                </p>
                <p className="text-gray-900 font-semibold mb-4">— {story.name}</p>
                <button className="flex items-center gap-2 text-[#00B8B0] font-semibold hover:gap-3 transition-all">
                  Citește povestea
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#00B8B0] to-[#00a39c] rounded-2xl p-8 md:p-12 text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">
            Descoperă comunitatea Help Autism
          </h3>
          <p className="text-xl mb-6 text-white/95">
            Alătură-te miilor de familii care și-au transformat viețile
          </p>
          <button className="bg-white text-[#00B8B0] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Explorează comunitatea
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
