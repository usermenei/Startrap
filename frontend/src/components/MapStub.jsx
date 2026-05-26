import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'

const sampleDevices = [
  {id: 'JK-TRAP-01', lat:-6.070, lng:106.810, status:'green', battery:92, type:'device'},
  {id: 'JK-TRAP-02', lat:-6.085, lng:106.820, status:'yellow', battery:58, type:'device'},
  {id: 'DEBRIS-PL-01', lat:-6.065, lng:106.825, status:'red', type:'plastic', info:'Plastic bottles detected'},
  {id: 'DEBRIS-FN-02', lat:-6.055, lng:106.800, status:'red', type:'fishing_net', info:'Fishing net entanglement'},
  {id: 'DEBRIS-ST-03', lat:-6.045, lng:106.835, status:'yellow', type:'styrofoam', info:'Floating styrofoam'}
]

const typeIcons = {
  device:'🛰️',
  plastic:'🥤',
  fishing_net:'🪝',
  styrofoam:'🧊'
}

export default function MapStub(){
  const navigate = useNavigate()

  function openDevice(id){
    navigate(`/device/${id}`)
  }

  function color(status){
    if(status==='green') return '#22c55e'
    if(status==='yellow') return '#f59e0b'
    return '#ef4444'
  }

  function markerColorByType(t){
    if(t==='plastic') return '#ff3b30'
    if(t==='fishing_net') return '#8b5cf6'
    if(t==='styrofoam') return '#f59e0b'
    return '#22c55e'
  }

  function iconFor(d){
    return typeIcons[d.type] || '📍'
  }

  return (
    <div className="h-96 rounded-xl glass p-4">
      <div className="h-full rounded-lg border border-white/4 flex overflow-hidden">
        <div className="w-2/3 p-0">
          <MapContainer center={[-6.08,106.82]} zoom={12} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {sampleDevices.map(d => (
              <CircleMarker
                key={d.id}
                center={[d.lat, d.lng]}
                radius={d.type==='device'? 8 : 12}
                pathOptions={{ color: d.type==='device'? color(d.status) : markerColorByType(d.type), fillColor: d.type==='device'? color(d.status) : markerColorByType(d.type), fillOpacity: 0.8 }}
                eventHandlers={{ click: () => openDevice(d.id) }}
              >
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold">{iconFor(d)} {d.id}</div>
                    {d.type==='device' ? (
                      <>
                        <div>Battery: {d.battery}%</div>
                        <div>Status: {d.status}</div>
                        <div className="mt-2 text-xs text-cyan-200 cursor-pointer" onClick={() => openDevice(d.id)}>Open device page</div>
                      </>
                    ) : (
                      <>
                        <div>Type: {d.type.replace('_',' ')}</div>
                        <div className="text-xs text-white/60">{d.info}</div>
                      </>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
        <div className="w-1/3 p-4">
          <div className="text-sm font-semibold mb-2">Deployed STARTRAP Units</div>
          <ul className="space-y-2 text-sm">
            {sampleDevices.map(d=> (
              <li key={d.id} className="flex items-center justify-between">
                <button onClick={() => openDevice(d.id)} className="flex items-center gap-2">
                  <span className="text-lg">{iconFor(d)}</span>
                  <div>{d.id}</div>
                </button>
                <div className="text-xs text-white/60">{d.lat.toFixed(3)}, {d.lng.toFixed(3)}</div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-white/60">Jakarta Bay sea deployment with STARTRAP buoys and detected debris locations.</div>
        </div>
      </div>
    </div>
  )
}
