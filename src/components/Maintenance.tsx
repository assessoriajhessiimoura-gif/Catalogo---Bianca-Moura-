export default function Maintenance() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F5EDE4]/50 to-[#E8DDD4]/50" id="manutencao">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-float border border-[#D4AF37]/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-[#8B7355] mb-6">Manutenção</h2>

              <div className="space-y-4">
                <div className="bg-white/50 rounded-xl p-5 hover:bg-white/70 transition-all duration-300 animate-float border border-[#D4AF37]/5">
                  <h3 className="text-lg font-light text-[#A0826D] mb-1">Manutenções dos volumes</h3>
                  <p className="text-2xl font-light text-[#D4AF37]">R$ 110,00</p>
                </div>

                <div className="bg-white/50 rounded-xl p-5 hover:bg-white/70 transition-all duration-300 animate-float border border-[#D4AF37]/5">
                  <h3 className="text-lg font-light text-[#A0826D] mb-1">Manutenção Mega Volume</h3>
                  <p className="text-2xl font-light text-[#D4AF37]">R$ 120,00</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="h-80 md:h-full bg-gradient-to-br from-[#E8D5C4] to-[#D1BFA7] flex items-center justify-center p-8">
                <p className="text-[#8B7355] text-sm text-center">
                  Envie a segunda foto da profissional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
