import React from 'react'

const alerts = [
  {id:1, severity:'high', time:'11:12', device:'JK-TRAP-02', msg:'High Plastic Concentration Detected', action:'Investigate and deploy cleanup crew'},
  {id:2, severity:'medium', time:'10:55', device:'JK-TRAP-03', msg:'Water Quality Declining', action:'Schedule sampling'},
  {id:3, severity:'critical', time:'09:30', device:'CAM-03', msg:'Camera Offline', action:'Check camera connection'}
]

function Severity({s}){
  if(s==='critical') return <span className="text-red-300">Critical</span>
  if(s==='high') return <span className="text-yellow-300">High</span>
  return <span className="text-white/60">{s}</span>
}

export default function Alerts(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Environmental Alerts</h2>
      <p className="text-sm text-white/60">Real-time notifications and recommended actions.</p>

      <div className="mt-4 space-y-3">
        {alerts.map(a=> (
          <div key={a.id} className="p-3 glass rounded-md flex items-start justify-between">
            <div>
              <div className="font-semibold">{a.msg}</div>
              <div className="text-xs text-white/60">{a.time} — {a.device}</div>
              <div className="mt-2 text-xs">Recommended: {a.action}</div>
            </div>
            <div className="text-right">
              <div className="mb-2"><Severity s={a.severity} /></div>
              <button className="px-3 py-1 bg-white/6 rounded-md text-xs">Acknowledge</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
