import React from 'react'

const devices = [
  {id:'JK-TRAP-01', loc:'Jakarta Bay', battery:92, solar:'Yes', conn:'4G', last:'5m', status:'healthy'},
  {id:'JK-TRAP-02', loc:'North Jakarta', battery:58, solar:'Yes', conn:'4G', last:'22m', status:'warning'},
  {id:'JK-TRAP-03', loc:'West Jakarta', battery:12, solar:'No', conn:'Offline', last:'2d', status:'critical'}
]

function StatusPill({s}){
  if(s==='healthy') return <span className="text-green-300">🟢 Healthy</span>
  if(s==='warning') return <span className="text-yellow-300">🟡 Warning</span>
  return <span className="text-red-300">🔴 Critical</span>
}

export default function Fleet(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Fleet Management</h2>
      <p className="text-sm text-white/60">Overview of deployed STARTRAP devices.</p>

      <div className="mt-4 glass rounded-md p-4">
        <table className="w-full text-sm">
          <thead className="text-white/60 text-left">
            <tr><th>Device ID</th><th>Location</th><th>Battery</th><th>Solar</th><th>Connectivity</th><th>Last Comms</th><th>Status</th></tr>
          </thead>
          <tbody>
            {devices.map(d => (
              <tr key={d.id} className="border-t border-white/6">
                <td className="py-2">{d.id}</td>
                <td>{d.loc}</td>
                <td>{d.battery}%</td>
                <td>{d.solar}</td>
                <td>{d.conn}</td>
                <td>{d.last}</td>
                <td><StatusPill s={d.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
