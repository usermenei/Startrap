import React from 'react'
import '../utils/chartSetup'
import { Pie } from 'react-chartjs-2'

const pie = { labels:['SDG6','SDG13','SDG14','SDG17'], datasets:[{data:[35,25,30,10], backgroundColor:['#22d3ee','#60a5fa','#34d399','#f59e0b']}] }

export default function ESGReporting(){
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">ESG Impact Reporting</h2>
        <p className="text-sm text-white/60">KPIs, SDG alignment, and investor reports.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 glass rounded-md">
          <div className="text-xs text-white/60">Plastic Removed</div>
          <div className="text-2xl font-semibold">12.8 Tons</div>
        </div>
        <div className="p-4 glass rounded-md">
          <div className="text-xs text-white/60">CO2 Avoided</div>
          <div className="text-2xl font-semibold">3.4 Tons</div>
        </div>
        <div className="p-4 glass rounded-md">
          <div className="text-xs text-white/60">Communities Supported</div>
          <div className="text-2xl font-semibold">8</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 glass rounded-md">
          <div className="text-sm text-white/60">SDG Alignment</div>
          <div className="mt-4"><Pie data={pie} /></div>
        </div>
        <div className="p-4 glass rounded-md">
          <div className="text-sm text-white/60">Investor Summary</div>
          <div className="mt-2 text-sm">Quarterly impact summary and downloadable ESG report (PDF)</div>
          <div className="mt-4"><button className="px-3 py-2 bg-cyan-400 text-black rounded-md">Download ESG Report (PDF)</button></div>
        </div>
      </div>
    </div>
  )
}
