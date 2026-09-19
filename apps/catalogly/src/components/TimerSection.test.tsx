import { render, screen } from '@testing-library/react'
import { TimerSection } from './TimerSection'

describe('TimerSection', () => {
  it('renders heading', () => {
    render(<TimerSection />)
    expect(screen.getByText('Hot Deals of this Month')).toBeInTheDocument()
  })

  it('renders countdown units', () => {
    render(<TimerSection />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders Shop Now button', () => {
    render(<TimerSection />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })
})
