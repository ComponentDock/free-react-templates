import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and bio text', () => {
    render(<About />)
    expect(screen.getByText('About Myself')).toBeInTheDocument()
    expect(screen.getByText(/inappropriate behavior/i)).toBeInTheDocument()
  })

  it('renders all three stat items', () => {
    render(<About />)
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('Total Donation')).toBeInTheDocument()
    expect(screen.getByText('1465')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('3965')).toBeInTheDocument()
    expect(screen.getByText('Total Volunteers')).toBeInTheDocument()
  })

  it('renders tools expertness heading', () => {
    render(<About />)
    expect(screen.getByText('Tools Expertness')).toBeInTheDocument()
  })

  it('renders all five skill bars with correct percentages', () => {
    render(<About />)
    expect(screen.getByText('After Effects')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('Illustrator')).toBeInTheDocument()
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getByText('Sublime')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('Sketch')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('skill bars have correct ARIA attributes', () => {
    render(<About />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(5)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '85')
    expect(bars[0]).toHaveAttribute('aria-valuemin', '0')
    expect(bars[0]).toHaveAttribute('aria-valuemax', '100')
  })
})
