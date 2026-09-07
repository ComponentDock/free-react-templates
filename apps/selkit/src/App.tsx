import { useEffect } from 'react'
import { MultiSelect } from './components/MultiSelect'
import { Footer } from './components/Footer'

const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

export function App() {
  useEffect(() => {
    document.title = 'Selkit — Multi-Select Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-[Roboto] text-text">
      <main className="flex flex-1 items-start justify-center px-4 py-[7rem]">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-xl font-normal text-text">Multi-Select #6</h2>
          <div className="flex justify-center">
            <MultiSelect options={US_STATES} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
