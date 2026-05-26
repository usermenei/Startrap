import React from 'react'

// Real microplastic imagery from Wikimedia Commons used for prototype AI camera feeds
const cameras = [
  {
    id: 'CAM-01',
    loc: 'Jakarta Bay',
    status: 'online',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Microplastic-found-key-largo-beach-state-park.jpg',
    detections: [
      {label: 'Plastic Pellet Cluster', confidence: 0.94, left: '8%', top: '12%', width: '40%', height: '28%', color: '#38bdf8'},
      {label: 'Microplastic Fragments', confidence: 0.86, left: '48%', top: '32%', width: '30%', height: '22%', color: '#f97316'}
    ]
  },
  {
    id: 'CAM-02',
    loc: 'North Jakarta',
    status: 'online',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/A_line_of_microplastic_left_as_the_tide_recedes_-_geograph.org.uk_-_7312142.jpg',
    detections: [
      {label: 'Microplastic Line', confidence: 0.91, left: '16%', top: '38%', width: '65%', height: '18%', color: '#22d3ee'},
      {label: 'Plastic Debris', confidence: 0.79, left: '22%', top: '56%', width: '24%', height: '18%', color: '#fde68a'}
    ]
  },
  {
    id: 'CAM-03',
    loc: 'West Jakarta',
    status: 'offline',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Angel_Hair_microplastics.jpg',
    detections: [
      {label: 'Microplastic Fibres', confidence: 0.82, left: '12%', top: '40%', width: '36%', height: '24%', color: '#7c3aed'}
    ]
  },
  {
    id: 'CAM-04',
    loc: 'South Jakarta',
    status: 'online',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Arctic_microplastic_pollution%2C_Svalbard_Archipelago.jpg',
    detections: [
      {label: 'Plastic Particle Field', confidence: 0.88, left: '30%', top: '20%', width: '38%', height: '28%', color: '#f43f5e'}
    ]
  }
]

function CameraCard({cam}){
  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/10 shadow-lg">
      <div className="relative h-72 bg-slate-900 overflow-hidden">
        <img src={cam.image} alt={`${cam.id} feed`} className="h-full w-full object-cover opacity-90" />
        <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">{cam.status === 'online' ? 'LIVE' : 'OFFLINE'}</div>
        <div className="absolute left-4 bottom-4 rounded-2xl bg-black/60 px-3 py-2 text-xs text-white backdrop-blur">
          {cam.id} — {cam.loc}
        </div>
        {cam.detections.map((det, index) => (
          <div
            key={`${cam.id}-${index}`}
            className="absolute rounded-md border-2"
            style={{
              left: det.left,
              top: det.top,
              width: det.width,
              height: det.height,
              borderColor: det.color
            }}
          >
            <div className="bg-black/70 text-[10px] text-white px-1 py-[2px] rounded-br-md">
              {det.label} {Math.round(det.confidence * 100)}%
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">{cam.id}</p>
            <p className="text-xs text-white/60">{cam.loc}</p>
          </div>
          <div className={`text-xs font-semibold ${cam.status === 'online' ? 'text-emerald-300' : 'text-red-300'}`}>
            {cam.status.toUpperCase()}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
          {cam.detections.map((det, index) => (
            <div key={`summary-${index}`} className="rounded-xl bg-white/5 p-3">
              <p className="font-medium text-white text-[0.75rem]">{det.label}</p>
              <p>{Math.round(det.confidence * 100)}% confidence</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AICamera(){
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">AI Camera Monitoring</h2>
        <p className="text-sm text-white/60">Live debris detection feeds with YOLO-style bounding boxes for garbage and fishing debris.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {cameras.map(c => (
          <CameraCard key={c.id} cam={c} />
        ))}
      </div>
    </div>
  )
}
