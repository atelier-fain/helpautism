import { ArrowRight } from 'lucide-react';

export default function CampaignBanner() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 184, 176, 0.85), rgba(0, 184, 176, 0.85)), url('https://images.pexels.com/photos/8612991/pexels-photo-8612991.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Explorează ce facem
        </h2>
        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto">
          Descoperă programele și serviciile noastre care schimbă viețile copiilor cu autism
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#E23E8E] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#c9357a] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
            Donează acum
          </button>
          <button className="bg-white text-[#00B8B0] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
            Vezi toate programele
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
