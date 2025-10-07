import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Împreună schimbăm povești
        </h1>
        <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto">
          Ajută un copil cu autism să își descopere lumea
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#E23E8E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c9357a] transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
            Donează acum
          </button>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg w-full sm:w-auto flex items-center justify-center gap-2">
            Află cum te poți implica
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
