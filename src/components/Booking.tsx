import { useState } from 'react';
import { Phone, Send } from 'lucide-react';

const procedures = [
  { name: 'Volume Brasileiro', price: 'R$ 165,00' },
  { name: 'Volume Fox', price: 'R$ 165,00' },
  { name: 'Volume Fox Marrom', price: 'R$ 165,00' },
  { name: 'Volume Europeu', price: 'R$ 165,00' },
  { name: 'Mega Volume', price: 'R$ 180,00' },
];

export default function Booking() {
  const [selectedProcedure, setSelectedProcedure] = useState('');

  const handleWhatsApp = () => {
    if (!selectedProcedure) {
      alert('Por favor, selecione um procedimento');
      return;
    }

    const message = `Olá Bianca! Quero agendar esse procedimento: ${selectedProcedure}.`;
    const phone = '5531991028853';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4" id="agendamento">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 animate-float border border-[#D4AF37]/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-[#8B7355] mb-3">Agende seu Horário</h2>
            <p className="text-[#A0826D]">Escolha o procedimento desejado</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-[#8B7355] font-light mb-3">
                Selecione o procedimento:
              </label>

              {procedures.map((procedure, index) => (
                <label
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 hover:scale-102 ${
                    selectedProcedure === `${procedure.name} ${procedure.price}`
                      ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-md'
                      : 'bg-white/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="procedure"
                      value={`${procedure.name} ${procedure.price}`}
                      checked={selectedProcedure === `${procedure.name} ${procedure.price}`}
                      onChange={(e) => setSelectedProcedure(e.target.value)}
                      className="w-5 h-5 text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0"
                    />
                    <span className="text-[#8B7355]">{procedure.name}</span>
                  </div>
                  <span className="text-[#D4AF37] font-light">{procedure.price}</span>
                </label>
              ))}
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-[#A0826D] to-[#8B7355] text-white py-4 rounded-xl font-light text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Agendar via WhatsApp
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
