import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  {name:'Dashboard Overview', to:'/'} ,
  {name:'Fisherman Operations', to:'/fisherman'},
  {name:'Live Ocean Monitoring', to:'/live'},
  {name:'Plastic Pollution Analytics', to:'/analytics'},
  {name:'Marine Debris Detection', to:'/debris'},
  {name:'AI Camera Monitoring', to:'/camera'},
  {name:'Fleet Management', to:'/fleet'},
  {name:'ESG Impact Reporting', to:'/esg'},
  {name:'Environmental Alerts', to:'/alerts'},
  {name:'Historical Analytics', to:'/history'},
  {name:'Settings', to:'/settings'}
]

export default function Sidebar(){
  return (
    <aside className="hidden md:block w-64 p-6 border-r border-white/6 glass">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">STARTRAP</h1>
        <p className="text-sm text-cyan-300">Ocean Intelligence Platform</p>
      </div>
      <nav className="space-y-1">
        {items.map(i=> (
          <NavLink key={i.name} to={i.to} className={({isActive}) => `block px-3 py-2 rounded-md hover:bg-white/3 ${isActive? 'bg-white/6': ''}`}>
            {i.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-8 text-xs text-white/60">v0.1 Prototype — For demo only</div>
    </aside>
  )
}
