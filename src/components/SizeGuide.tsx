import React, { useState } from 'react';
import { Ruler, ArrowRight, CheckCircle, Info, Calculator, Users } from 'lucide-react';

const SizeGuide: React.FC = () => {
  const [selectedTrimester, setSelectedTrimester] = useState(2);
  const [currentSize, setCurrentSize] = useState('');
  const [prePregnancySize, setPrePregnancySize] = useState('');

  const trimesters = [
    { id: 1, label: 'Trimestrul 1', weeks: '1-12 săptămâni', growth: 'Minimal' },
    { id: 2, label: 'Trimestrul 2', weeks: '13-26 săptămâni', growth: 'Moderat' },
    { id: 3, label: 'Trimestrul 3', weeks: '27-40 săptămâni', growth: 'Maxim' }
  ];

  const sizeChart = {
    1: { // Trimestrul 1
      XS: { bust: '80-84', waist: '60-64', hips: '85-89', belly: '75-80' },
      S: { bust: '85-89', waist: '65-69', hips: '90-94', belly: '81-86' },
      M: { bust: '90-94', waist: '70-74', hips: '95-99', belly: '87-92' },
      L: { bust: '95-99', waist: '75-79', hips: '100-104', belly: '93-98' },
      XL: { bust: '100-104', waist: '80-84', hips: '105-109', belly: '99-104' },
      XXL: { bust: '105-109', waist: '85-89', hips: '110-114', belly: '105-110' }
    },
    2: { // Trimestrul 2
      XS: { bust: '82-86', waist: '65-70', hips: '85-89', belly: '85-90' },
      S: { bust: '87-91', waist: '71-76', hips: '90-94', belly: '91-96' },
      M: { bust: '92-96', waist: '77-82', hips: '95-99', belly: '97-102' },
      L: { bust: '97-101', waist: '83-88', hips: '100-104', belly: '103-108' },
      XL: { bust: '102-106', waist: '89-94', hips: '105-109', belly: '109-114' },
      XXL: { bust: '107-111', waist: '95-100', hips: '110-114', belly: '115-120' }
    },
    3: { // Trimestrul 3
      XS: { bust: '85-89', waist: '75-80', hips: '88-92', belly: '95-100' },
      S: { bust: '90-94', waist: '81-86', hips: '93-97', belly: '101-106' },
      M: { bust: '95-99', waist: '87-92', hips: '98-102', belly: '107-112' },
      L: { bust: '100-104', waist: '93-98', hips: '103-107', belly: '113-118' },
      XL: { bust: '105-109', waist: '99-104', hips: '108-112', belly: '119-124' },
      XXL: { bust: '110-114', waist: '105-110', hips: '113-117', belly: '125-130' }
    }
  };

  const measurementTips = [
    {
      area: 'Bust',
      tip: 'Măsoară în jurul celei mai largi părți a bustului, cu sutienul purtat normal'
    },
    {
      area: 'Talie',
      tip: 'Măsoară în cea mai îngustă parte a taliei, deasupra buricului'
    },
    {
      area: 'Șolduri',
      tip: 'Măsoară în jurul celei mai largi părți a șoldurilor'
    },
    {
      area: 'Burtică',
      tip: 'Măsoară în jurul celui mai proeminent punct al burții'
    }
  ];

  const getSizeRecommendation = () => {
    if (!prePregnancySize) return null;
    
    const sizeMap = { XS: 0, S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const currentIndex = sizeMap[prePregnancySize as keyof typeof sizeMap];
    
    if (currentIndex === undefined) return null;
    
    let recommendedIndex = currentIndex;
    if (selectedTrimester === 2 && currentIndex < 5) recommendedIndex += 1;
    if (selectedTrimester === 3 && currentIndex < 4) recommendedIndex += 2;
    
    return sizes[Math.min(recommendedIndex, 5)];
  };

  return (
    <section id="ghid-marimi" className="py-20 bg-gradient-to-br from-white via-ivory to-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium border border-emerald/20 mb-6">
            <Ruler className="w-4 h-4 mr-2" />
            Ghidul Complet de Mărimi
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-charcoal">
            Găsește Mărimea Perfectă
          </h2>
          
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Corpul tău se schimbă frumos în timpul sarcinii. Ghidul nostru te ajută să alegi 
            mărimea potrivită pentru fiecare etapă a călătoriei tale.
          </p>
        </div>

        {/* Size Calculator */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-sand shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-coral" />
              Calculator de Mărime
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-3">Mărimea de dinainte de sarcină</label>
                <select 
                  value={prePregnancySize} 
                  onChange={(e) => setPrePregnancySize(e.target.value)}
                  className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                >
                  <option value="">Selectează mărimea</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-3">Trimestrul actual</label>
                <select 
                  value={selectedTrimester} 
                  onChange={(e) => setSelectedTrimester(Number(e.target.value))}
                  className="w-full bg-white border border-sand rounded-2xl px-4 py-3 text-charcoal focus:outline-none focus:border-coral transition-colors"
                >
                  {trimesters.map(trimester => (
                    <option key={trimester.id} value={trimester.id}>
                      {trimester.label} ({trimester.weeks})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                {getSizeRecommendation() && (
                  <div className="w-full bg-gradient-to-r from-coral/10 to-emerald/10 rounded-2xl p-4 border border-coral/20">
                    <p className="text-sm text-charcoal/70 mb-1">Mărimea recomandată:</p>
                    <p className="text-2xl font-bold text-coral">{getSizeRecommendation()}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Size Chart */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-sand shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Tabel de Mărimi - {trimesters[selectedTrimester - 1].label}</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-charcoal">
                <thead>
                  <tr className="border-b border-sand">
                    <th className="text-left py-4 px-2 font-semibold">Mărime</th>
                    <th className="text-center py-4 px-2 font-semibold">Bust (cm)</th>
                    <th className="text-center py-4 px-2 font-semibold">Talie (cm)</th>
                    <th className="text-center py-4 px-2 font-semibold">Șolduri (cm)</th>
                    <th className="text-center py-4 px-2 font-semibold">Burtică (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(sizeChart[selectedTrimester as keyof typeof sizeChart]).map(([size, measurements]) => (
                    <tr key={size} className="border-b border-sand/50 hover:bg-sand/20 transition-colors">
                      <td className="py-4 px-2 font-semibold text-coral">{size}</td>
                      <td className="py-4 px-2 text-center">{measurements.bust}</td>
                      <td className="py-4 px-2 text-center">{measurements.waist}</td>
                      <td className="py-4 px-2 text-center">{measurements.hips}</td>
                      <td className="py-4 px-2 text-center">{measurements.belly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Measurement Tips */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Cum să Te Măsori Corect</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {measurementTips.map((tip, index) => (
              <div key={index} className="bg-white/60 rounded-2xl p-6 border border-sand">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-2">{tip.area}</h4>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{tip.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tips */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-coral/10 to-emerald/10 rounded-3xl p-8 border border-coral/20">
            <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-emerald" />
              Sfaturi Utile
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">Măsoară-te dimineața, când nu ești umflată</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">Poartă numai lenjeria intimă când te măsori</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">Banda de măsurat să fie ferma, dar nu strânsă</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">Re-măsoară-te la fiecare 4-6 săptămâni</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">În caz de îndoială, alege mărimea mai mare</p>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald mt-1 flex-shrink-0" />
                  <p className="text-charcoal/80">Contactează-ne pentru consiliere personalizată</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
