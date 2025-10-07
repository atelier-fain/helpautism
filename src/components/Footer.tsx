import { Heart, Facebook, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Cine suntem', href: '#about' },
      { name: 'Ce facem', href: '#programs' },
      { name: 'Povești', href: '#stories' },
      { name: 'Contact', href: '#contact' },
      { name: 'Shop', href: '#shop' },
    ],
    legal: [
      { name: 'Politica de confidențialitate', href: '#privacy' },
      { name: 'Termeni și condiții', href: '#terms' },
      { name: 'Politica cookies', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#00B8B0] rounded-lg">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl font-bold">Help Autism</span>
            </div>
            <p className="text-gray-400 mb-6">
              Împreună schimbăm povești și construim un viitor mai bun pentru copiii cu autism și familiile lor.
            </p>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B8B0] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B8B0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B8B0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00B8B0] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigare</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#00B8B0] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#00B8B0] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonează-te pentru a primi ultimele noutăți și povești de impact
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="flex-1 px-4 py-2.5 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B8B0]"
              />
              <button
                className="w-12 h-12 bg-[#00B8B0] rounded-full flex items-center justify-center hover:bg-[#00a39c] transition-colors"
                aria-label="Subscribe"
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Help Autism România. Toate drepturile rezervate.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-[#00B8B0]">♿</span>
              Website accesibil WCAG AA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
