import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl shadow-2xl p-8 border border-blue-500/30">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          CodexBioCircuit Growth Dashboard
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          Tração Mínima Documentada • Fundraising Round: $90K Pre-Seed
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Leads Totais</p>
            <p className="text-3xl font-mono font-bold text-blue-400">0</p>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Interações LinkedIn</p>
            <p className="text-3xl font-mono font-bold text-green-400">0</p>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400 uppercase tracking-wider">Demos Agendadas</p>
            <p className="text-3xl font-mono font-bold text-purple-400">0</p>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Status da API</h2>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono">Gateway Ativo • Aguardando Conexão LinkedIn</span>
          </div>
        </div>
      </div>
    </div>
  );
}
