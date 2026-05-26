import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

const samplePoints = [
  {id:'JK-01', lat:-6.042, lng:106.820, intensity:0.8},
  {id:'JK-02', lat:-6.070, lng:106.790, intensity:0.6},
  {id:'JK-03', lat:-6.110, lng:106.840, intensity:0.9},
  {id:'JK-04', lat:-5.980, lng:106.740, intensity:0.4},
  {id:'JK-05', lat:-6.000, lng:106.900, intensity:0.7},
  {id:'JK-06', lat:-6.050, lng:106.760, intensity:0.3},
  {id:'JK-07', lat:-6.020, lng:106.860, intensity:0.95},
]

function getColor(v){
  if(v>0.8) return '#ff3b30' // red
  if(v>0.6) return '#ff9500' // orange
  if(v>0.4) return '#ffd60a' // yellow
  if(v>0.2) return '#22d3ee' // cyan
  return '#60a5fa' // blue
}

export default function JakartaHeatmap(){
  return (
    <div className="mt-6 glass p-4 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold">Jakarta Coastal Pollution Heatmap</h3>
          <div className="text-xs text-white/60">Simulated pollution intensity along Jakarta coast (prototype data)</div>
        </div>
        <div className="text-xs text-white/60">Region: Jakarta Bay</div>
      </div>

      <div className="h-96 rounded-md overflow-hidden border border-white/6">
        <MapContainer center={[-6.05, 106.82]} zoom={10} scrollWheelZoom={false} className="h-full w-full">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {samplePoints.map(p => (
            <CircleMarker
              key={p.id}
              center={[p.lat, p.lng]}
              radius={8 + p.intensity * 20}
              pathOptions={{ color: getColor(p.intensity), fillColor: getColor(p.intensity), fillOpacity: 0.6, weight: 0 }}
            >
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{p.id}</div>
                  <div>Intensity: {(p.intensity*100).toFixed(0)}%</div>
                  <div>Coordinates: {p.lat.toFixed(3)}, {p.lng.toFixed(3)}</div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-3 flex gap-3 items-center text-xs">
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ff3b30] rounded-full"/>High</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ff9500] rounded-full"/>Elevated</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#ffd60a] rounded-full"/>Moderate</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#22d3ee] rounded-full"/>Low</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#60a5fa] rounded-full"/>Very Low</div>
      </div>
    </div>
  )
}
