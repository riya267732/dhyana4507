
import React, { useState } from 'react';
import { getStylingAdvice } from '../services/geminiService';

export const CourtsideConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query) return;
    setLoading(true);
    const advice = await getStylingAdvice(query);
    setResponse(advice || '');
    setLoading(false);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold">Courtside Consultant</h3>
          <p className="text-zinc-400 text-sm">AI-powered style advisor</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 'I need a sleek outfit for an outdoor tournament in the city...'"
          className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
          rows={3}
        />
        <button
          onClick={handleConsult}
          disabled={loading || !query}
          className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 hover:text-white transition-all disabled:opacity-50"
        >
          {loading ? 'Consulting the playbook...' : 'Get Advice'}
        </button>
      </div>

      {response && (
        <div className="mt-8 p-6 bg-zinc-800 rounded-xl border-l-4 border-orange-600 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-lg leading-relaxed">{response}</p>
        </div>
      )}
    </div>
  );
};
