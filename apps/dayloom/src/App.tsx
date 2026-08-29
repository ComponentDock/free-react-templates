import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { CalendarGrid } from './components/CalendarGrid'
import { EventSidebar } from './components/EventSidebar'
import { Footer } from './components/Footer'

interface EventItem {
  date: string
  title: string
  time?: string
}

function toLocalDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export default function App() {
  const [currentView, setCurrentView] = useState<'month' | 'week' | 'day'>('month')
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [searchQuery, setSearchQuery] = useState('')
  const [events, setEvents] = useState<EventItem[]>([
    { date: toLocalDateString(new Date()), title: 'Team Sync & Planning', time: '10:00' },
  ])

  const handleAddEvent = (newEvent: EventItem) => {
    setEvents((prev) => [...prev, newEvent])
  }

  const handleDeleteEvent = (indexToDelete: number) => {
    const selectedDateStr = toLocalDateString(selectedDate)
    let currentMatchCount = 0
    setEvents((prev) =>
      prev.filter((ev) => {
        if (ev.date === selectedDateStr) {
          if (currentMatchCount === indexToDelete) {
            currentMatchCount++
            return false
          }
          currentMatchCount++
        }
        return true
      }),
    )
  }

  const filteredEvents = searchQuery
    ? events.filter((e) => e.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : events

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar currentView={currentView} onViewChange={setCurrentView} onSearch={setSearchQuery} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        <CalendarGrid
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          events={filteredEvents}
        />
        <EventSidebar
          selectedDate={selectedDate}
          events={filteredEvents}
          onAddEvent={handleAddEvent}
          onDeleteEvent={handleDeleteEvent}
        />
      </main>

      <Footer />
    </div>
  )
}
