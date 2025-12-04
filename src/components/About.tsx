export default function About() {
  return (
    <section className="py-20 px-4" id="sobre">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 animate-float border border-[#D4AF37]/10">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-3xl md:text-4xl font-light text-[#8B7355] mx-4">Sobre Mim</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <p className="text-[#8B7355] text-lg leading-relaxed text-center md:text-justify">
            Sou <span className="font-medium text-[#A0826D]">Bianca Moura</span>, Lash Designer especializada em realçar a beleza do olhar com técnica, segurança e personalização. Meu objetivo é entregar resultados leves, duradouros e adaptados para cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
