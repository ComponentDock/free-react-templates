import { MapPin, Search, ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function SearchBar() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-section-alt py-8">
      <div className="mx-auto max-w-6xl px-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:flex-row">
          <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3">
            {/* Location */}
            <div className="relative">
              <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
                <option>Phoenix</option>
              </select>
            </div>

            {/* Types */}
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>All Types</option>
                <option>Commercial</option>
                <option>Office</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Condominium</option>
              </select>
            </div>

            {/* City */}
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>All City</option>
                <option>London</option>
                <option>Singapore</option>
                <option>Delhi</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>

            {/* Bathroom */}
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>Bathroom</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="relative">
              <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body-text" />
              <select className="w-full appearance-none rounded border border-border bg-white py-3 pl-4 pr-10 text-sm text-heading focus:border-brand focus:outline-none">
                <option>Price Range</option>
                <option>$0 - $100,000</option>
                <option>$100,000 - $300,000</option>
                <option>$300,000 - $500,000</option>
                <option>$500,000+</option>
              </select>
            </div>
          </div>

          {/* Search button */}
          <div className="flex items-center">
            <Button
              type="submit"
              className="w-full rounded bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark lg:w-auto"
            >
              <Search className="mr-2 inline h-4 w-4" />
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
