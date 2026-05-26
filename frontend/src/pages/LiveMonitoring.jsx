import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'

const seaDevices = [
  {id:'JK-TRAP-SEA-01', lat:-6.085, lng:106.810, status:'Healthy', battery:88},
  {id:'JK-TRAP-SEA-02', lat:-6.095, lng:106.825, status:'Moderate', battery:64},
  {id:'JK-TRAP-SEA-03', lat:-6.075, lng:106.835, status:'Critical', battery:28}
]

const debrisMarkers = [
  {id:'PL-01', lat:-6.080, lng:106.815, type:'🥤', info:'Plastic bottle cluster'},
  {id:'FN-02', lat:-6.090, lng:106.828, type:'🪝', info:'Fishing net debris'},
  {id:'ST-03', lat:-6.072, lng:106.840, type:'🧊', info:'Styrofoam drift'}
]

function markerColorForType(type){
  if(type==='🥤') return '#ff3b30'
  if(type==='🪝') return '#8b5cf6'
  if(type==='🧊') return '#f59e0b'
  return '#22d3ee'
}

export default function LiveMonitoring(){
  const navigate = useNavigate()

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Live Ocean Monitoring</h2>
        <p className="text-sm text-white/60">Jakarta Bay real-time ocean monitoring with deployed STARTRAP buoys in the sea.</p>
      </div>

      <div className="glass rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-sm text-white/60">Live GPS location • Ocean current overlay • Pollution hotspots</div>
            <div className="text-xl font-semibold">Jakarta Bay Deployment</div>
          </div>
          <div className="text-xs text-white/60">Map region: Jakarta Bay, Indonesia</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-[520px] rounded-xl overflow-hidden border border-white/10">
            <MapContainer center={[-6.085, 106.820]} zoom={12} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {seaDevices.map(device => (
                <CircleMarker
                  key={device.id}
                  center={[device.lat, device.lng]}
                  radius={12}
                  pathOptions={{ color: '#22d3ee', fillColor: '#22d3ee', fillOpacity: 0.85 }}
                  eventHandlers={{ click: () => navigate(`/device/${device.id}`) }}
                >
                  <Popup>
                    <div className="text-sm">
                      <div className="font-semibold">🛰️ {device.id}</div>
                      <div>{device.status}</div>
                      <div>Battery: {device.battery}%</div>
                      <div className="mt-2 text-xs text-cyan-200 cursor-pointer" onClick={() => navigate(`/device/${device.id}`)}>Open device detail</div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
              {debrisMarkers.map(marker => (
                <CircleMarker
                  key={marker.id}
                  center={[marker.lat, marker.lng]}
                  radius={10}
                  pathOptions={{ color: markerColorForType(marker.type), fillColor: markerColorForType(marker.type), fillOpacity: 0.9 }}
                >
                  <Popup>
                    <div className="text-sm">
                      <div className="font-semibold">{marker.type} {marker.id}</div>
                      <div className="text-xs text-white/60">{marker.info}</div>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-xl p-4">
              <div className="text-xs text-white/60">Active STARTRAP Buoys & Debris Alerts</div>
              <div className="mt-3 space-y-3">
                {seaDevices.map(device => (
                  <button key={device.id} onClick={() => navigate(`/device/${device.id}`)} className="w-full p-3 rounded-xl bg-white/5 text-left hover:bg-white/10">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">🛰️ {device.id}</div>
                      <div className="text-xs text-white/50">{device.status}</div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">{device.lat.toFixed(3)}, {device.lng.toFixed(3)}</div>
                    <div className="text-xs text-cyan-200 mt-2">Battery {device.battery}%</div>
                  </button>
                ))}
                {debrisMarkers.map(marker => (
                  <div key={marker.id} className="w-full p-3 rounded-xl bg-white/5 text-left">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{marker.type} {marker.id}</div>
                      <div className="text-xs text-white/50">Debris</div>
                    </div>
                    <div className="text-xs text-white/60 mt-1">{marker.lat.toFixed(3)}, {marker.lng.toFixed(3)}</div>
                    <div className="text-xs text-cyan-200 mt-2">{marker.info}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-xl p-4">
              <div className="text-sm text-white/60">Sea Conditions</div>
              <div className="mt-3 grid gap-3">
                <div className="p-3 bg-white/5 rounded-xl">
                  <div className="text-xs text-white/60">Current Strength</div>
                  <div className="text-xl font-semibold">2.6 knots</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <div className="text-xs text-white/60">Pollution Alert</div>
                  <div className="text-xl font-semibold text-yellow-300">Moderate</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl">
                  <div className="text-xs text-white/60">Water Temperature</div>
                  <div className="text-xl font-semibold">29.4°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
