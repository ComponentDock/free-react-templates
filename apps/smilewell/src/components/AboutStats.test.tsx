import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutStats } from './AboutStats'

describe('AboutStats', () => {
  it('renders all 4 stat counters', () => {
    render(<AboutStats />)
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('320+')).toBeInTheDocument()
    expect(screen.getByText('1500+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<AboutStats />)
    expect(screen.getByText('Year of Experience')).toBeInTheDocument()
    expect(screen.getByText('Expert Doctors')).toBeInTheDocument()
    expect(screen.getByText('Health Sections')).toBeInTheDocument()
    expect(screen.getByText('Happy Smiles')).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<AboutStats />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    expect(playBtn).toBeInTheDocument()
  })

  it('has gradient background', () => {
    const { container } = render(<AboutStats />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gradient-to-r')
  })
})
