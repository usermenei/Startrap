import React from 'react'
import MapStub from '../components/MapStub'

const detections = [
  {id:'D-1001', type:'Plastic Bottle', confidence:0.92, time:'10:12', lat:-6.065, lng:106.825},
  {id:'D-1002', type:'Fishing Net', confidence:0.87, time:'10:35', lat:-6.055, lng:106.800},
  {id:'D-1003', type:'Styrofoam', confidence:0.78, time:'11:05', lat:-6.045, lng:106.835}
]

export default function MarineDebris(){
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Marine Debris Detection</h2>
        <p className="text-sm text-white/60">Live camera feeds and AI detection overlays — recent detections below.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <MapStub />
        </div>
        <div className="p-4 glass rounded-xl">
          <div className="text-sm font-semibold mb-2">Recent Detections</div>
          <ul className="space-y-3 text-sm">
            {detections.map(d => (
              <li key={d.id} className="p-3 rounded-md bg-white/3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{d.type}</div>
                    <div className="text-xs text-white/60">{d.time} — {d.id}</div>
                  </div>
                  <div className="text-sm text-white/80">Conf: {(d.confidence*100).toFixed(0)}%</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
