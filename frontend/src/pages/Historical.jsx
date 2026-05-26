import React, {useState} from 'react'
import '../utils/chartSetup'
import { Line } from 'react-chartjs-2'

export default function Historical(){
  const [from,setFrom] = useState('2026-01-01')
  const [to,setTo] = useState('2026-05-26')

  const sample = { labels:['Jan','Feb','Mar','Apr','May'], datasets:[{label:'Ocean Health Index', data:[78,80,81,82,82], borderColor:'#60a5fa'}] }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Historical Analytics</h2>
        <p className="text-sm text-white/60">Date range selector, device comparison, export reports.</p>
      </div>

      <div className="p-4 glass rounded-md flex items-center gap-4">
        <div>
          <div className="text-xs text-white/60">From</div>
          <input type="date" value={from} onChange={e=>setFrom(e.target.value)} className="mt-1 p-2 rounded-md bg-black/50" />
        </div>
        <div>
          <div className="text-xs text-white/60">To</div>
          <input type="date" value={to} onChange={e=>setTo(e.target.value)} className="mt-1 p-2 rounded-md bg-black/50" />
        </div>
        <div className="ml-auto">
          <button className="px-3 py-2 bg-cyan-400 text-black rounded-md">Export PDF</button>
        </div>
      </div>

      <div className="p-4 glass rounded-md">
        <Line data={sample} />
      </div>
    </div>
  )
}
