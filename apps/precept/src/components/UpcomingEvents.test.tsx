import { render, screen } from '@testing-library/react'
import { UpcomingEvents } from './UpcomingEvents'

describe('UpcomingEvents', () => {
  it('renders section heading', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText(/Upcoming Events/i)).toBeInTheDocument()
  })

  it('renders all event cards', () => {
    render(<UpcomingEvents />)
    expect(screen.getByText('Summer Art Workshop')).toBeInTheDocument()
    expect(screen.getByText('Web Dev Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Photography Basics')).toBeInTheDocument()
  })
})
