
import React, { useState } from 'react';
import { Logo } from './components/Logo.tsx';
import { SectionTitle } from './components/SectionTitle.tsx';
import { CourtsideConsultant } from './components/CourtsideConsultant.tsx';
import { ChatBox } from './components/ChatBox.tsx';
import { PRODUCTS, MARKET_STATS, COMPETITORS, VALUES } from './constants.tsx';
import { Category } from './types.ts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'consumer' | 'investor'>('consumer');
  const [filter, setFilter] = useState<Category | 'All'>('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen selection:bg-orange-600 selection:text-white relative">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#shop" className="hover:text-orange-500 transition-colors">Shop</a>
          <a href="#mission" className="hover:text-orange-500 transition-colors">Mission</a>
          <a href="#community" className="hover:text-orange-500 transition-colors">Community</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveTab(activeTab === 'consumer' ? 'investor' : 'consumer')}
            className="text-xs border border-zinc-700 px-3 py-1 rounded-full uppercase tracking-tighter hover:bg-zinc-800 transition-colors"
          >
            {activeTab === 'consumer' ? 'Investor Portal' : 'Store View'}
          </button>
          <button className="bg-white text-black px-4 py-2 text-sm font-black uppercase rounded hover:bg-orange-600 hover:text-white transition-all">
            Log In
          </button>
        </div>
      </nav>

      {activeTab === 'consumer' ? (
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-40"
                alt="Basketball court"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 text-center px-6">
              <span className="inline-block text-orange-600 font-black uppercase tracking-[0.3em] mb-4 text-sm md:text-base animate-pulse">
                Phase 1 Live Now
              </span>
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                BUILT <br /> <span className="text-stroke">FOR THE</span> <br /> GAME
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 font-medium leading-relaxed">
                Performance-driven sportswear inspired by basketball culture, street identity, and modern athletic performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#shop" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-lg hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105">
                  Shop Drop 01
                </a>
                <a href="#mission" className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all">
                  Our Story
                </a>
              </div>
            </div>
          </section>

          {/* Featured Collections */}
          <section id="shop" className="py-24 px-6 md:px-12 bg-zinc-950">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <SectionTitle 
                title="The Drop 01" 
                subtitle="Limited release performance and street essentials."
              />
              <div className="flex flex-wrap gap-2">
                {['All', Category.PERFORMANCE, Category.STREETWEAR].map(c => (
                  <button
                    key={c}
                    onClick={() => setFilter(c as any)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                      filter === c ? 'bg-white text-black border-white' : 'bg-transparent text-white border-zinc-700 hover:border-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="group relative flex flex-col bg-zinc-900 overflow-hidden border border-zinc-800">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/80 backdrop-blur text-[10px] font-black uppercase tracking-tighter border border-zinc-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="absolute bottom-4 right-4 w-12 h-12 bg-white text-black flex items-center justify-center rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black uppercase tracking-tight">{product.name}</h3>
                      <span className="font-bold text-zinc-400">₹{product.price.toLocaleString()}</span>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map(f => (
                        <span key={f} className="text-[10px] text-zinc-400 uppercase tracking-widest">• {f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Advisor Section */}
          <section className="py-24 px-6 md:px-12 bg-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="COURTSIDE ADVICE" 
                  subtitle="Not sure what to rock? Let our AI-driven stylist build your next look based on the game's latest trends."
                />
                <ul className="space-y-6">
                  {VALUES.map(v => (
                    <li key={v.title} className="flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-600"></div>
                      <div>
                        <h4 className="font-bold text-lg uppercase tracking-tight">{v.title}</h4>
                        <p className="text-zinc-400">{v.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <CourtsideConsultant />
            </div>
          </section>

          {/* Culture Section */}
          <section id="mission" className="py-24 px-6 md:px-12 bg-white text-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                MORE THAN <br /> THE COURT
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12">
                HOOP is born from the asphalt and the hardwood. We don't just make clothes; we build armor for those who live and breathe the sport. From high-performance moisture-wicking gear to oversized essentials that dominate the street.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Durable', 'Authentic', 'Focused', 'Urban'].map(word => (
                  <div key={word} className="border-t-2 border-black pt-4">
                    <span className="text-sm font-black uppercase tracking-[0.2em]">{word}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* Investor Portal View */
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <header className="mb-20">
            <span className="text-orange-600 font-black uppercase tracking-widest text-sm mb-4 inline-block">Brand Strategy & PRD</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">HOOP Executive <br /> Investor Brief</h1>
            <p className="mt-8 text-xl text-zinc-400 max-w-3xl">
              A disruptive approach to the global sportswear market through a culture-first, performance-heavy independent model.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {MARKET_STATS.map(stat => (
              <div key={stat.label} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2 block">{stat.label}</span>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
                <p className="text-zinc-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-24">
            <section>
              <SectionTitle title="The Competitive Gap" subtitle="Why HOOP wins in a crowded market." />
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="pb-4 font-black uppercase tracking-widest text-sm text-zinc-500">Brand</th>
                      <th className="pb-4 font-black uppercase tracking-widest text-sm text-zinc-500">Strength</th>
                      <th className="pb-4 font-black uppercase tracking-widest text-sm text-zinc-500">The Gap</th>
                      <th className="pb-4 font-black uppercase tracking-widest text-sm text-zinc-500">HOOP Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPETITORS.map((c, idx) => (
                      <tr key={idx} className="border-b border-zinc-800 group hover:bg-zinc-900/50 transition-colors">
                        <td className="py-6 font-black uppercase text-xl">{c.name}</td>
                        <td className="py-6 text-zinc-400">{c.strength}</td>
                        <td className="py-6 text-zinc-400">{c.gap}</td>
                        <td className="py-6 font-bold text-orange-500">{c.opportunity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Phase 1 Launch Unit Economics</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Jersey', cost: '₹1,250', retail: '₹5,000', margin: '75%' },
                    { label: 'Shorts', cost: '₹1,160', retail: '₹4,600', margin: '74%' },
                    { label: 'Hoodie', cost: '₹2,100', retail: '₹9,100', margin: '76%' },
                    { label: 'Tees', cost: '₹830', retail: '₹4,100', margin: '79%' },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between border-b border-zinc-800 pb-4">
                      <span className="font-bold uppercase tracking-tight text-lg">{row.label}</span>
                      <div className="text-right">
                        <div className="text-zinc-500 text-xs">Target Retail</div>
                        <div className="font-black text-white">{row.retail}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-zinc-500 text-xs">Gross Margin</div>
                        <div className="font-black text-emerald-500">{row.margin}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">The Roadmap</h3>
                <div className="space-y-8">
                  {[
                    { phase: '01', title: 'Foundation', desc: 'Finalize branding, samples, and DTC engine launch (Months 0-6)' },
                    { phase: '02', title: 'Expansion', desc: 'Women\'s performance line & international shipping (Months 6-12)' },
                    { phase: '03', title: 'Presence', desc: 'Signature athlete collaborations & pop-up retail events (Year 2)' },
                  ].map(item => (
                    <div key={item.phase} className="flex gap-6">
                      <div className="text-4xl font-black text-zinc-800 group-hover:text-orange-600 transition-colors">{item.phase}</div>
                      <div>
                        <h4 className="font-bold uppercase tracking-widest text-lg text-white mb-2">{item.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      )}

      {/* Floating Chatbot */}
      <ChatBox />

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo className="mb-6 h-10" />
            <p className="text-zinc-500 max-sm mb-8">
              HOOP is a culture-first sportswear brand dedicated to the players, the dreamers, and the builders of the game.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'TikTok'].map(s => (
                <a key={s} href="#" className="text-xs font-black uppercase tracking-widest hover:text-orange-500 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Collections</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Performance Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Urban Streetwear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Drops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 HOOP PERFORMANCE CO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
