import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import DashboardHome from './pages/DashboardHome'
import LiveMonitoring from './pages/LiveMonitoring'
import PlasticAnalytics from './pages/PlasticAnalytics'
import MarineDebris from './pages/MarineDebris'
import AICamera from './pages/AICamera'
import Fleet from './pages/Fleet'
import ESGReporting from './pages/ESGReporting'
import Alerts from './pages/Alerts'
import Historical from './pages/Historical'
import Settings from './pages/Settings'
import DeviceDetail from './pages/DeviceDetail'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-gradient-to-b from-[#00111a] via-[#001f2b] to-[#003048] text-white">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<DashboardHome/>} />
            <Route path="/live" element={<LiveMonitoring/>} />
            <Route path="/analytics" element={<PlasticAnalytics/>} />
            <Route path="/debris" element={<MarineDebris/>} />
            <Route path="/camera" element={<AICamera/>} />
            <Route path="/fleet" element={<Fleet/>} />
            <Route path="/esg" element={<ESGReporting/>} />
            <Route path="/alerts" element={<Alerts/>} />
            <Route path="/history" element={<Historical/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/device/:id" element={<DeviceDetail/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
