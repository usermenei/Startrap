import React, {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const items = [
  {name:'Dashboard Overview', to:'/'} ,
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

function labelForPath(path){
  const found = items.find(i=> i.to === path)
  return found ? found.name : path.replace('/', '') || 'Dashboard'
}

export default function MobileTopNav(){
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const label = labelForPath(loc.pathname)

  return (
    <header className="md:hidden w-full bg-gradient-to-b from-[#00111a]/60 to-[#001f2b]/60 border-b border-white/6">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div>
            <div className="text-sm text-white/80">{label}</div>
            <div className="text-xs text-white/50">STARTRAP</div>
          </div>
        </div>
        <div className="text-xs text-white/60">v0.1</div>
      </div>

      {/* Drawer */}
      {open && (
        <div className="absolute inset-0 z-40">
          <div className="fixed inset-0 bg-black/50" onClick={()=>setOpen(false)} />
          <nav className="fixed left-0 top-0 h-full w-64 bg-[#00111a] p-4 overflow-auto">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">STARTRAP</h2>
              <p className="text-sm text-white/50">Ocean Intelligence</p>
            </div>
            <div className="space-y-1">
              {items.map(i=> (
                <NavLink key={i.name} to={i.to} onClick={()=>setOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md hover:bg-white/3 ${isActive? 'bg-white/6': ''}`}>
                  {i.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
