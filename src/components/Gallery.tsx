import { useState } from 'react';
import { Sparkles } from 'lucide-react';

const procedures = [
  { id: 1, name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { id: 2, name: 'Volume Fox', price: 'R$ 165,00' },
  { id: 3, name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { id: 4, name: 'Volume Europeu', price: 'R$ 165,00' },
  { id: 5, name: 'Mega Volume', price: 'R$ 180,00' },
  { id: 6, name: 'Mega Volume', price: 'R$ 180,00' },
];

export default function Gallery() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" id="procedimentos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-[#D4AF37] mr-2 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-light text-[#8B7355]">Procedimentos</h2>
            <Sparkles className="w-6 h-6 text-[#D4AF37] ml-2 animate-pulse" />
          </div>
          <p className="text-[#A0826D]">Técnicas especializadas para cada estilo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure) => (
            <div
              key={procedure.id}
              className={`group cursor-pointer transition-all duration-500 ${
                selectedCard === procedure.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedCard(selectedCard === procedure.id ? null : procedure.id)}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-float border border-[#D4AF37]/10">
                <div className="relative h-64 bg-gradient-to-br from-[#E8D5C4] to-[#D1BFA7] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#8B7355] text-sm px-4 text-center">
                      Foto do procedimento<br/>{procedure.name}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-[#D4AF37]/10 transition-opacity duration-500 ${
                    selectedCard === procedure.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-light text-[#8B7355] mb-2">{procedure.name}</h3>
                  <div className={`transition-all duration-500 overflow-hidden ${
                    selectedCard === procedure.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-2xl font-light text-[#D4AF37] mt-2">{procedure.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
