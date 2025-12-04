import { Phone, Instagram, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-[#8B7355] to-[#A0826D] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
          <h3 className="text-2xl font-light">Bianca Moura Lash Designer</h3>
          <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" />
        </div>

        <div className="flex items-center justify-center gap-8 mb-8">
          <a
            href="https://wa.me/5531991028853"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300 group"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>(31) 9 9102-8853</span>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-300 group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>@biancamoura</span>
          </a>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6"></div>

        <p className="text-sm text-white/80 font-light">
          {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
