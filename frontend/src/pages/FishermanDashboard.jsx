import React, { useState } from 'react'

const devices = [
  {id: 'TRAP-001', status: 'clean', location: 'North Jakarta', cleanliness: 95, lastCleaned: '2 days ago'},
  {id: 'TRAP-002', status: 'dirty', location: 'West Jakarta', cleanliness: 42, lastCleaned: '10 days ago'},
  {id: 'TRAP-003', status: 'urgent', location: 'South Jakarta', cleanliness: 15, lastCleaned: '25 days ago'},
  {id: 'TRAP-004', status: 'clean', location: 'East Jakarta', cleanliness: 88, lastCleaned: '3 days ago'},
]

const ghostGears = [
  {id: 'GEAR-01', type: 'Fishing Net', depth: '12m', priority: 'high', location: 'Bay Center', effort: '2 divers'},
  {id: 'GEAR-02', type: 'Trap', depth: '8m', priority: 'medium', location: 'North Port', effort: '1 diver'},
  {id: 'GEAR-03', type: 'Rope Bundle', depth: '25m', priority: 'high', location: 'Deep Channel', effort: '3 divers'},
  {id: 'GEAR-04', type: 'Net Fragment', depth: '5m', priority: 'low', location: 'Shallow Waters', effort: '1 diver'},
]

export default function FishermanDashboard(){
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [selectedGear, setSelectedGear] = useState(null)

  const cleanDevice = (id) => {
    alert(`Scheduled cleaning for ${id}`)
  }

  const claimGear = (id) => {
    alert(`Ghost gear ${id} marked for retrieval. Team assigned!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white space-y-4 md:space-y-6 pb-8">
      {/* Header with Gradient */}
      <div className="relative overflow-hidden rounded-xl p-6 md:p-8 bg-gradient-to-r from-orange-600 to-red-600 shadow-2xl">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">🎣 Fisherman Operations</h1>
          <p className="text-orange-100 text-sm md:text-base">Protect our waters • Manage STARTRAP devices • Retrieve ghost fishing gear</p>
        </div>
      </div>

      {/* Quick Stats - Enhanced */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-400/40 rounded-xl p-4 md:p-5 hover:border-orange-400/80 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-xs md:text-sm text-orange-200/70 font-medium">Devices Needing Care</div>
            <div className="text-2xl md:text-4xl font-bold text-orange-300 mt-3">2</div>
            <div className="text-xs text-orange-100/50 mt-2">Out of 4 total</div>
          </div>
        </div>
        <div className="group relative bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/40 rounded-xl p-4 md:p-5 hover:border-amber-400/80 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-xs md:text-sm text-amber-200/70 font-medium">Ghost Gear Items</div>
            <div className="text-2xl md:text-4xl font-bold text-amber-300 mt-3">4</div>
            <div className="text-xs text-amber-100/50 mt-2">Awaiting retrieval</div>
          </div>
        </div>
        <div className="group relative bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-400/40 rounded-xl p-4 md:p-5 hover:border-red-400/80 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-xs md:text-sm text-red-200/70 font-medium">High Priority</div>
            <div className="text-2xl md:text-4xl font-bold text-red-400 mt-3">2</div>
            <div className="text-xs text-red-100/50 mt-2">Urgent action</div>
          </div>
        </div>
        <div className="group relative bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-400/40 rounded-xl p-4 md:p-5 hover:border-green-400/80 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="text-xs md:text-sm text-green-200/70 font-medium">Teams Available</div>
            <div className="text-2xl md:text-4xl font-bold text-green-400 mt-3">3</div>
            <div className="text-xs text-green-100/50 mt-2">Ready to deploy</div>
          </div>
        </div>
      </div>

      {/* Two Column Layout - Stacks on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* STARTRAP Devices Section */}
        <div className="bg-gradient-to-br from-orange-900/40 to-slate-900/40 border border-orange-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-orange-400/20">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2c0 1.05.686 1.954 1.613 2.332-.082.483-.32 1.362-.47 2.02C3.218 12.496 3 13.5 3 15c0 1.627.457 3.154 1.25 4.472.666 1.045 1.585 1.952 2.668 2.664.767.474 1.605.742 2.445.885.841.144 1.662.166 2.418.166.756 0 1.577-.022 2.418-.166.84-.143 1.678-.411 2.445-.885 1.083-.712 2.002-1.619 2.668-2.664.793-1.318 1.25-2.845 1.25-4.472 0-1.5-.218-2.504-.348-3.648-.15-.658-.388-1.537-.47-2.02A2 2 0 0017 7V5a2 2 0 00-2-2H5z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Clean & Monitor</h2>
              <p className="text-xs text-orange-200/60">STARTRAP devices</p>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3 max-h-96 overflow-y-auto">
            {devices.map(d => (
              <div key={d.id} className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${selectedDevice === d.id ? 'bg-orange-600/30 border-orange-400 shadow-lg shadow-orange-500/20' : 'bg-slate-800/40 border-orange-400/20 hover:border-orange-400/60 hover:bg-slate-800/60'}`} onClick={() => setSelectedDevice(d.id)}>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white text-sm md:text-base">{d.id}</div>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold tracking-wide ${d.status === 'clean' ? 'bg-green-500/30 text-green-300 border border-green-400/50' : d.status === 'dirty' ? 'bg-orange-600/40 text-orange-200 border border-orange-400/50' : 'bg-red-600/40 text-red-300 border border-red-400/50'}`}>
                    {d.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs md:text-sm text-orange-200/80 font-medium mb-3">{d.location}</div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-orange-200/60 font-semibold">Cleanliness</div>
                  <div className="text-base font-bold text-orange-300">{d.cleanliness}%</div>
                </div>
                <div className="w-full bg-slate-900/60 rounded-full h-3 mb-4 overflow-hidden border border-orange-400/20">
                  <div className={`h-3 rounded-full transition-all duration-500 ${d.cleanliness > 80 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : d.cleanliness > 50 ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 'bg-gradient-to-r from-red-400 to-orange-500'}`} style={{width: `${d.cleanliness}%`}}></div>
                </div>
                <div className="text-xs text-orange-100/50 mb-3 flex items-center gap-1">
                  <span>📅</span> Last cleaned: {d.lastCleaned}
                </div>
                <button onClick={() => cleanDevice(d.id)} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/30">
                  📋 Schedule Cleaning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Ghost Fishing Gear Section */}
        <div className="bg-gradient-to-br from-red-900/40 to-slate-900/40 border border-red-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-400/20">
            <div className="p-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Ghost Gear</h2>
              <p className="text-xs text-red-200/60">Retrieval operations</p>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3 max-h-96 overflow-y-auto">
            {ghostGears.map(g => (
              <div key={g.id} className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${selectedGear === g.id ? 'bg-red-600/30 border-red-400 shadow-lg shadow-red-500/20' : 'bg-slate-800/40 border-red-400/20 hover:border-red-400/60 hover:bg-slate-800/60'}`} onClick={() => setSelectedGear(g.id)}>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-white text-sm md:text-base">{g.id}</div>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold tracking-wide ${g.priority === 'high' ? 'bg-red-700/50 text-red-200 border border-red-400/50' : g.priority === 'medium' ? 'bg-yellow-600/40 text-yellow-300 border border-yellow-400/50' : 'bg-blue-600/40 text-blue-300 border border-blue-400/50'}`}>
                    {g.priority.toUpperCase()}
                  </span>
                </div>
                <div className="text-xs md:text-sm text-red-200/80 font-medium mb-3">{g.type} • {g.location}</div>
                <div className="flex flex-col md:flex-row justify-between text-xs text-red-100/60 font-semibold mb-4 gap-2 bg-slate-900/40 p-2 rounded-lg">
                  <span>🌊 Depth: <span className="text-red-300">{g.depth}</span></span>
                  <span>👥 Team: <span className="text-red-300">{g.effort}</span></span>
                </div>
                <button onClick={() => claimGear(g.id)} className={`w-full py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${g.priority === 'high' ? 'bg-gradient-to-r from-red-700 to-pink-600 hover:from-red-600 hover:to-pink-500 text-white hover:shadow-red-500/30' : 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white hover:shadow-red-500/30'}`}>
                  🚀 Claim & Deploy Team
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Section - Mobile Friendly */}
      <div className="bg-gradient-to-r from-slate-900 via-orange-900/50 to-slate-900 border-2 border-orange-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-3xl">⚡</span>
          <h3 className="text-xl md:text-2xl font-bold text-orange-300">Today's Priority Actions</h3>
        </div>
        <ul className="space-y-3 text-xs md:text-sm">
          <li className="flex items-start gap-3 p-3 rounded-lg bg-red-600/20 border border-red-400/30">
            <span className="text-xl flex-shrink-0">🚨</span>
            <span><strong className="text-red-300">URGENT:</strong> <span className="text-red-100/90">TRAP-003 in South Jakarta requires immediate cleaning (15% cleanliness)</span></span>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-lg bg-red-600/15 border border-red-400/25">
            <span className="text-xl flex-shrink-0">🔴</span>
            <span><strong className="text-red-300">HIGH PRIORITY:</strong> <span className="text-red-100/90">Ghost fishing net at Deep Channel (25m) — Deploy 3-diver team</span></span>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-lg bg-yellow-600/15 border border-yellow-400/25">
            <span className="text-xl flex-shrink-0">📋</span>
            <span><strong className="text-yellow-300">ROUTINE:</strong> <span className="text-yellow-100/90">Schedule cleaning for TRAP-002 within next 5 days</span></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
