import React, { useState } from 'react';
import { Sparkles, Loader2, Lightbulb, Clapperboard, Music2, Timer } from 'lucide-react';
import { generateCreativeConcept, ConceptResult } from '../services/geminiService';

const AICreativeAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConceptResult | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    const concept = await generateCreativeConcept(input);
    setResult(concept);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="ui-badge mb-6">
            <span className="badge-dot">•</span> ai assistant
          </div>
          <h2 className="section-title-large text-center">
            Creative <br/>
            <em>Concept Generator</em>
          </h2>
          <p className="about-bio mt-6 text-center mx-auto">
            Stuck on an edit? Describe your raw footage, and let AI suggest a visual style, music vibe, and pacing.
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., A cyberpunk car chase at night in Tokyo..."
              className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-600"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="btn-raycast"
              style={{ padding: '16px 24px', borderRadius: '12px' }}
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
              {loading ? 'Thinking...' : 'Generate'}
            </button>
          </div>

          {result && (
            <div className="animate-fade-in space-y-6">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Lightbulb className="text-yellow-400 w-6 h-6" />
                  {result.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-cyan-400">
                    <Clapperboard className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase">Visual Style</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed lowercase">{result.visualStyle}</p>
                </div>

                <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-purple-400">
                    <Music2 className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase">Sound Vibe</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed lowercase">{result.musicVibe}</p>
                </div>

                <div className="bg-black/30 p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-pink-500">
                    <Timer className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase">Pacing</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed lowercase">{result.pacing}</p>
                </div>
              </div>
            </div>
          )}
          
          {!result && !loading && (
             <div className="text-center py-10 opacity-50">
               <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/5 mb-4">
                 <Sparkles className="w-8 h-8 text-gray-500" />
               </div>
               <p className="text-gray-500 text-sm">Your concept will appear here</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AICreativeAssistant;