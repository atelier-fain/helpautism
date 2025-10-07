import { ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      title: 'Centre Help Autism',
      description: 'Centre specializate unde copiii primesc terapie individualizată și suport continuu',
      image: 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Tipuri de Terapie',
      description: 'Terapii bazate pe evidență științifică: ABA, logopedie, terapie ocupațională',
      image: 'https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Autism ON',
      description: 'Program de informare și advocacy pentru conștientizarea autismului',
      image: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Help Family',
      description: 'Suport psihologic și training pentru părinți și familii',
      image: 'https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Help Home',
      description: 'Servicii de respiro și îngrijire temporară pentru familii',
      image: 'https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Help Hire',
      description: 'Program de integrare pe piața muncii pentru tineri cu autism',
      image: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Help EDU',
      description: 'Training și certificări pentru specialiști și educatori',
      image: 'https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Franciză Socială',
      description: 'Replică modelul nostru de succes în comunitatea ta',
      image: 'https://images.pexels.com/photos/8613094/pexels-photo-8613094.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce facem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Programele noastre oferă suport complet pentru copii cu autism și familiile lor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-80 cursor-pointer transform hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${program.image}')`,
                }}
              />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-white/90 mb-4 line-clamp-2">
                  {program.description}
                </p>
                <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Află mai mult
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
