import React from 'react';
import Head from 'next/head';

export default function Home() {
  const leads = [
    { name: "Jamie Zhou", role: "Principal Engineer, AI/DL", company: "NVIDIA", status: "Inbound / Interested in Intro", type: "Tech Elite" },
    { name: "Praneeta Paravastu", role: "Research / Biotech", company: "Independent", status: "Inbound / Requested 15-min Call", type: "Discovery" },
    { name: "SynBio Canada", role: "National Organization", company: "Canada", status: "Inbound / Strategic Partnership", type: "Organization" },
    { name: "SynBioLinkPT", role: "National Organization", company: "Portugal", status: "Inbound / Usability Feedback", type: "Organization" },
    { name: "EUSynBioS", role: "European Association", company: "Europe", status: "Inbound / Demo & Workshop", type: "Organization" },
    { name: "GASB e.V.", role: "German Association", company: "Germany", status: "Inbound / Professional Networking", type: "Organization" },
    { name: "Melchior du Lac", role: "Biotech Professional", company: "SynBio Ecosystem", status: "Inbound / Strategic Networking", type: "Discovery" },
    { name: "Aiza Khan", role: "Computational Biologist", company: "Academic Research", status: "Inbound / Technical Feedback", type: "Academic" },
    { name: "Faizan Ullah Khan", role: "Bioinformatician / ADME Expert", company: "Research", status: "Inbound / Technical Feedback", type: "Academic" },
    { name: "Dr. Farheen Shafique", role: "Molecular Biologist", company: "Academic Research", status: "Inbound / Technical Feedback", type: "Academic" },
    { name: "Vijwal Mahendrakar", role: "AI Researcher", company: "Northeastern University", status: "Inbound / Technical Feedback", type: "Academic" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      <Head>
        <title>CodexBioCircuit | Live Traction Dashboard</title>
        <meta name="description" content="Live traction data for CodexBioCircuit $90K Pre-Seed Round" />
      </Head>

      <main className="max-w-6xl mx-auto p-8">
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
            CodexBioCircuit
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Building the world's fastest genetic circuit design & simulation engine. 
            Currently in <strong className="text-white">Fundraising Mode ($90K Pre-Seed)</strong>.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all group">
            <h3 className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2 group-hover:text-emerald-400">Organic Inbound</h3>
            <p className="text-4xl font-bold">99%</p>
            <p className="text-emerald-400 text-sm mt-2 font-medium">Product-Market Magnetism</p>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all group">
            <h3 className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2 group-hover:text-cyan-400">Global Reach</h3>
            <p className="text-4xl font-bold">4+</p>
            <p className="text-cyan-400 text-sm mt-2 font-medium">National SynBio Orgs (CA, PT, EU, DE)</p>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all group">
            <h3 className="text-zinc-500 uppercase text-xs font-bold tracking-widest mb-2 group-hover:text-purple-400">Fundraising Target</h3>
            <p className="text-4xl font-bold">$90K</p>
            <p className="text-purple-400 text-sm mt-2 font-medium">Pre-Seed Round (Open)</p>
          </div>
        </section>

        <section className="bg-zinc-900/30 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Live Traction Log (LinkedIn Inbound)</h2>
              <p className="text-zinc-500 mt-1">Real-time data from global organizations and tech elite.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">Live Sync</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-900/50 text-zinc-500 text-[10px] uppercase tracking-widest">
                  <th className="px-8 py-4">Lead Name</th>
                  <th className="px-8 py-4">Role / Company</th>
                  <th className="px-8 py-4">Category</th>
                  <th className="px-8 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {leads.map((lead, idx) => (
                  <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="px-8 py-6 font-semibold text-white">{lead.name}</td>
                    <td className="px-8 py-6">
                      <span className="text-zinc-300 block text-sm font-medium">{lead.role}</span>
                      <span className="text-zinc-500 text-xs">{lead.company}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                        lead.type === 'Tech Elite' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                        lead.type === 'Organization' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                      }`}>
                        {lead.type}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-xs text-zinc-400 font-mono italic">{lead.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-12 text-center text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          &copy; 2026 CodexBioCircuit | Confidential Fundraising Data | Internal Growth Operations
        </footer>
      </main>
    </div>
  );
}
