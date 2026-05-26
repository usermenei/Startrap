import React from 'react'

export default function KpiCard({title,value,meta,trend}){
  const trendUp = trend && trend.startsWith('+')
  return (
    <div className="p-4 rounded-xl glass shadow-sm w-full">
      <div className="text-xs text-white/70">{title}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        {trend && (
          <div className={`px-2 py-1 rounded-md text-sm ${trendUp? 'bg-green-800/60 text-green-300' : 'bg-red-800/60 text-red-300'}`}>
            {trend}
          </div>
        )}
      </div>
      {meta && <div className="mt-1 text-xs text-white/60">{meta}</div>}
    </div>
  )
}
