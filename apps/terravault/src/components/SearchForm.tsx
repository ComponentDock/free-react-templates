import { useState } from 'react'
import { Search } from 'lucide-react'

const propertyTypes = ['All Types', 'Apartment', 'House', 'Villa', 'Condo']
const cities = ['All Cities', 'New York', 'Los Angeles', 'Chicago', 'Houston']
const bedrooms = ['Any', '1', '2', '3', '4', '5+']

export function SearchForm() {
  const [activeTab, setActiveTab] = useState<'find' | 'sale'>('find')

  return (
    <section id="search" className="py-8 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            <button
              className={`flex-1 py-3 text-center font-heading text-sm font-semibold transition-colors ${
                activeTab === 'find'
                  ? 'bg-[#2cbdb8] text-white'
                  : 'bg-[#19191a] text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('find')}
            >
              Find Your Home
            </button>
            <button
              className={`flex-1 py-3 text-center font-heading text-sm font-semibold transition-colors ${
                activeTab === 'sale'
                  ? 'bg-[#2cbdb8] text-white'
                  : 'bg-[#19191a] text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('sale')}
            >
              House For Sale
            </button>
          </div>
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div>
                <label
                  htmlFor="property-type"
                  className="mb-1 block text-xs font-medium text-gray-text"
                >
                  Property Type
                </label>
                <select
                  id="property-type"
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[#19191a] focus:border-[#2cbdb8] focus:outline-none"
                >
                  {propertyTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="title" className="mb-1 block text-xs font-medium text-gray-text">
                  Title
                </label>
                <select
                  id="title"
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[#19191a] focus:border-[#2cbdb8] focus:outline-none"
                >
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>House</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className="mb-1 block text-xs font-medium text-gray-text">
                  City
                </label>
                <select
                  id="city"
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[#19191a] focus:border-[#2cbdb8] focus:outline-none"
                >
                  {cities.map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bedrooms" className="mb-1 block text-xs font-medium text-gray-text">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  className="w-full rounded border border-gray-200 px-3 py-2 text-sm text-[#19191a] focus:border-[#2cbdb8] focus:outline-none"
                >
                  {bedrooms.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <div className="flex gap-6 text-xs text-gray-text">
                <span>Price: No Limits</span>
                <span>Size: No Limits</span>
              </div>
              <button className="flex items-center gap-2 rounded-full bg-[#2cbdb8] px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#24a6a1]">
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
