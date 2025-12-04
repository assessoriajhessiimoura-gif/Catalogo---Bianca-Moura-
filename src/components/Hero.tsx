import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5E6E8]/30 to-transparent animate-pulse-slow"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-float">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37]/20 shadow-2xl hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-gradient-to-br from-[#E8D5C4] to-[#D1BFA7] flex items-center justify-center">
              <p className="text-[#8B7355] text-sm px-8">Envie a primeira foto da profissional</p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-[#8B7355] mb-4 animate-fade-in tracking-wide">
          Bianca Moura
        </h1>

        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-delay">
          <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
          <p className="text-xl md:text-2xl text-[#A0826D] font-light">Lash Designer</p>
          <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
        </div>

        <p className="text-[#8B7355]/80 text-lg max-w-2xl mx-auto animate-fade-in-delay-2">
          Realçando a beleza do seu olhar com técnica e personalização
        </p>
      </div>
    </section>
  );
}
