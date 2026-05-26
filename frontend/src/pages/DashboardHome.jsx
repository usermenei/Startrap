import React from 'react'
import KpiCard from '../components/KpiCard'
import MapStub from '../components/MapStub'
import JakartaHeatmap from './JakartaHeatmap'

export default function DashboardHome(){
  const kpis = [
    {title:'Ocean Health Index', value:'82/100', meta:'Trend: +5%', trend:'+5%'},
    {title:'Plastic Pollution Level', value:'0.72 kg/m³', meta:'Status: Moderate'},
    {title:'Marine Debris Detected Today', value:'1,245', meta:'Trend: +12%', trend:'+12%'},
    {title:'Water Quality Score', value:'87%', meta:'Status: Good'},
  ]

  return (
    <div className="space-y-6">
      <header className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold">Mission Control</h2>
          <p className="text-sm text-white/60">STARTRAP Ocean Intelligence Platform — Live operations</p>
        </div>
        <div className="text-sm text-white/60">Updated: May 26, 2026</div>
      </header>

      <section className="grid grid-cols-4 gap-4">
        {kpis.map(k=> (
          <KpiCard key={k.title} title={k.title} value={k.value} meta={k.meta} trend={k.trend} />
        ))}
        <div className="col-span-2 p-4 rounded-xl glass">
          <div className="text-sm text-white/70">Active STARTRAP Devices</div>
          <div className="mt-2 flex items-center gap-6">
            <div>
              <div className="text-2xl font-semibold">124</div>
              <div className="text-xs text-white/60">Online</div>
            </div>
            <div>
              <div className="text-2xl font-semibold">5</div>
              <div className="text-xs text-white/60">Offline</div>
            </div>
            <div className="ml-auto text-sm text-white/60">Total Plastic Collected: <span className="font-semibold">12.8 Tons</span></div>
          </div>
        </div>
      </section>

      <section>
        <MapStub />
      </section>

      <section>
        <JakartaHeatmap />
      </section>
    </div>
  )
}
