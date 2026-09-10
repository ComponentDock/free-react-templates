import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { JobListings } from './JobListings'

describe('JobListings', () => {
  it('renders the heading with job count', () => {
    render(<JobListings />)
    expect(screen.getByText('109,234 Job Listed')).toBeInTheDocument()
  })

  it('renders at least 6 job cards', () => {
    render(<JobListings />)
    const titles = screen.getAllByText(/Designer|Developer|Director|Manager|Researcher|Scientist/)
    expect(titles.length).toBeGreaterThanOrEqual(6)
  })

  it('renders job type badges', () => {
    render(<JobListings />)
    expect(screen.getAllByText('Freelancer').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Full-time').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Part-time').length).toBeGreaterThanOrEqual(1)
  })

  it('renders pagination controls', () => {
    render(<JobListings />)
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument()
    expect(screen.getByLabelText('Next page')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
