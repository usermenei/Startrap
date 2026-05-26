import React from 'react'
import '../utils/chartSetup'
import { Pie, Line } from 'react-chartjs-2'
import JakartaHeatmap from './JakartaHeatmap'

export default function PlasticAnalytics(){
  const pieData = {
    labels: ['Plastic Bottle','Plastic Bag','Fishing Gear','Styrofoam','Other'],
    datasets: [{ data: [45,20,15,12,8], backgroundColor:['#ff3b30','#ff9500','#8b5cf6','#f59e0b','#22d3ee'] }]
  }

  const trendData = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
    datasets: [{ label: 'Plastic Density (kg/m³)', data:[0.5,0.55,0.6,0.62,0.68,0.7,0.72], borderColor:'#22d3ee', backgroundColor:'rgba(34,211,238,0.08)'}]
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Plastic Pollution Analytics</h2>
        <p className="text-sm text-white/60">Analytics, heatmaps, and plastic type distributions for Jakarta coast.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4 glass rounded-xl">
          <JakartaHeatmap />
        </div>

        <div className="p-4 glass rounded-xl">
          <div className="text-sm text-white/60">Plastic Type Distribution</div>
          <div className="mt-4">
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      <div className="p-4 glass rounded-xl">
        <div className="text-sm text-white/60">Monthly Pollution Trend</div>
        <div className="mt-4">
          <Line data={trendData} />
        </div>
      </div>

    </div>
  )
}
