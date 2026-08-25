import { useState } from 'react'
import {
  LayoutDashboard,
  MapPin,
  Heart,
  ChevronDown,
  ChevronUp,
  User,
  Settings,
  Shield,
  Compass,
  Camera,
} from 'lucide-react'

export function App() {
  const [openSection, setOpenSection] = useState<'manage' | 'location' | 'hobbies' | null>('manage')

  const toggleSection = (section: 'manage' | 'location' | 'hobbies') => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <header className="py-8 px-4 text-center border-b border-slate-200 bg-white shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-600">Expanda</h2>
        <p className="text-sm text-slate-500 mt-1">Interactive Management & Settings Dashboard</p>
      </header>

      <main className="max-w-2xl w-full mx-auto px-4 py-12 flex-grow">
        <div className="space-y-4">
          {/* Manage Section */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('manage')}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={openSection === 'manage'}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span>Manage</span>
              </div>
              {openSection === 'manage' ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {openSection === 'manage' && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-indigo-500" />
                    <span className="font-medium text-slate-700">01 Account</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-indigo-500" />
                    <span className="font-medium text-slate-700">02 Settings</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                    Config
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-indigo-300 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-indigo-500" />
                    <span className="font-medium text-slate-700">03 Profile</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full">
                    Secure
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Location Section */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('location')}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={openSection === 'location'}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Location</span>
              </div>
              {openSection === 'location' ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {openSection === 'location' && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 text-purple-600 font-medium">
                    <Compass className="w-5 h-5" />
                    <span>Regional Headquarters</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Global operations hub managing regional nodes, security routing, and localized
                    data compliance.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Hobbies Section */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden transition-all">
            <button
              onClick={() => toggleSection('hobbies')}
              className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={openSection === 'hobbies'}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <span>Hobbies</span>
              </div>
              {openSection === 'hobbies' ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {openSection === 'hobbies' && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 text-pink-600 font-medium">
                    <Camera className="w-5 h-5" />
                    <span>Photography & Hiking</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Exploring wilderness landscapes, nature photography, and open-source
                    contribution during weekends.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 border-t border-slate-200 bg-white">
        <p>
          More templates at{' '}
          <a
            href="https://www.componentdock.com"
            className="text-indigo-600 font-medium hover:underline"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </div>
  )
}
