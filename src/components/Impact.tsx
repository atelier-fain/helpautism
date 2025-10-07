import { Users, Home, Award, TrendingUp } from 'lucide-react';

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: '4000+',
      label: 'copii susținuți',
    },
    {
      icon: Home,
      number: '20',
      label: 'centre în toată țara',
    },
    {
      icon: Award,
      number: '150',
      label: 'terapeuți acreditați',
    },
    {
      icon: TrendingUp,
      number: '100%',
      label: 'transparență în donații',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00B8B0]/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#00B8B0]" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
