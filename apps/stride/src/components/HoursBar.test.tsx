import { render, screen } from '@testing-library/react'
import { HoursBar } from './HoursBar'

describe('HoursBar', () => {
  it('renders hours heading', () => {
    render(<HoursBar />)
    expect(screen.getByText('Hours')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<HoursBar />)
    expect(screen.getByText('Opening: 7:30am — Closing: 9:00pm')).toBeInTheDocument()
  })

  it('renders contact us button', () => {
    render(<HoursBar />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
