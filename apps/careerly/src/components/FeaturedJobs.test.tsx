import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedJobs } from './FeaturedJobs'

describe('FeaturedJobs', () => {
  it('renders section heading', () => {
    render(<FeaturedJobs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Jobs')
  })

  it('renders all 4 featured jobs', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText('Restaurant Crew')).toBeDefined()
    expect(screen.getByText('Fullstack Developer')).toBeDefined()
    expect(screen.getByText('Real Estate Assistant')).toBeDefined()
    expect(screen.getByText('Telecom Manager')).toBeDefined()
  })

  it('renders job descriptions', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText(/Join our dynamic team/)).toBeDefined()
    expect(screen.getByText(/Build scalable web applications/)).toBeDefined()
  })

  it('has bookmark buttons with accessible labels', () => {
    render(<FeaturedJobs />)
    expect(screen.getByLabelText('Bookmark Restaurant Crew')).toBeDefined()
    expect(screen.getByLabelText('Bookmark Fullstack Developer')).toBeDefined()
  })
})
