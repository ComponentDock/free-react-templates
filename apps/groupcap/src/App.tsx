import { useEffect } from 'react'
import { GroupcapMultiSelect } from './components/GroupcapMultiSelect'
import { Footer } from './components/Footer'
import type { OptionGroup } from './components/GroupcapMultiSelect'

const STATE_GROUPS: OptionGroup[] = [
  {
    label: 'Group A',
    maxSelections: 2,
    options: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
  },
  {
    label: 'Group B',
    maxSelections: 4,
    options: [
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
    ],
  },
  {
    label: 'Group C',
    maxSelections: 7,
    options: [
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
    ],
  },
  {
    label: 'Group D',
    maxSelections: 4,
    options: [
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
    ],
  },
]

export function App() {
  useEffect(() => {
    document.title = 'Groupcap — Multi-Select Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-[Roboto] text-text">
      <main className="flex flex-1 items-start justify-center px-4 py-[7rem]">
        <div className="w-full max-w-md">
          <h2 className="mb-8 text-center text-xl font-normal text-text">
            Multi-Select #8 (Limit selection on groups)
          </h2>
          <div className="flex justify-center">
            <GroupcapMultiSelect groups={STATE_GROUPS} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
