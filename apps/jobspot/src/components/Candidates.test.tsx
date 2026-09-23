import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Candidates } from './Candidates'

describe('Candidates', () => {
  it('renders the section heading', () => {
    render(<Candidates />)
    expect(screen.getByRole('heading', { name: /Latest Candidates/i })).toBeInTheDocument()
  })

  it('renders candidate names', () => {
    render(<Candidates />)
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Chen')).toBeInTheDocument()
  })

  it('renders candidate locations', () => {
    render(<Candidates />)
    expect(screen.getByText('New York, USA')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, USA')).toBeInTheDocument()
  })

  it('renders candidate bios', () => {
    render(<Candidates />)
    expect(screen.getByText(/Full-stack developer/i)).toBeInTheDocument()
    expect(screen.getByText(/UI\/UX designer/i)).toBeInTheDocument()
    expect(screen.getByText(/Data scientist/i)).toBeInTheDocument()
  })

  it('renders candidate photos', () => {
    render(<Candidates />)
    const photos = screen.getAllByRole('img')
    expect(photos.length).toBeGreaterThanOrEqual(3)
  })
})
