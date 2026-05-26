import React from 'react'
import { useParams } from 'react-router-dom'

export default function DeviceDetail(){
  const { id } = useParams()

  // In a real app we'd fetch device info here.
  const device = {
    id,
    coords: {lat:34.02, lng:-118.48},
    deployment: '2025-08-12',
    battery: '92%',
    connectivity: '4G',
    latest: {
      temperature: '18.4 °C',
      salinity: '35 ppt',
      pH: '8.1'
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Device {device.id}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 glass rounded-md">
          <div className="text-sm text-white/60">GPS Coordinates</div>
          <div className="font-semibold">{device.coords.lat}, {device.coords.lng}</div>
          <div className="mt-2 text-sm text-white/60">Deployment Date</div>
          <div className="font-semibold">{device.deployment}</div>
        </div>
        <div className="p-4 glass rounded-md">
          <div className="text-sm text-white/60">Battery Status</div>
          <div className="font-semibold">{device.battery}</div>
          <div className="mt-2 text-sm text-white/60">Connectivity</div>
          <div className="font-semibold">{device.connectivity}</div>
        </div>
      </div>

      <div className="p-4 glass rounded-md">
        <div className="text-sm text-white/60">Latest Sensor Readings</div>
        <div className="mt-2 grid grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-white/60">Temperature</div>
            <div className="font-semibold">{device.latest.temperature}</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Salinity</div>
            <div className="font-semibold">{device.latest.salinity}</div>
          </div>
          <div>
            <div className="text-xs text-white/60">pH</div>
            <div className="font-semibold">{device.latest.pH}</div>
          </div>
          <div>
            <div className="text-xs text-white/60">Microplastics</div>
            <div className="font-semibold">— particles/m³</div>
          </div>
        </div>
      </div>
    </div>
  )
}
