import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RecentJobs } from './RecentJobs'

describe('RecentJobs', () => {
  it('renders section heading', () => {
    render(<RecentJobs />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Jobs')
  })

  it('renders all 5 job listings', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Restaurant Crew')).toBeDefined()
    expect(screen.getByText('Fullstack Developer')).toBeDefined()
    expect(screen.getByText('React Developer')).toBeDefined()
    expect(screen.getByText('Real Estate Assistant')).toBeDefined()
    expect(screen.getByText('Telecom Manager')).toBeDefined()
  })

  it('renders location info', () => {
    render(<RecentJobs />)
    expect(screen.getByText('New York, NY')).toBeDefined()
    expect(screen.getByText('San Francisco, CA')).toBeDefined()
  })

  it('renders salary info', () => {
    render(<RecentJobs />)
    expect(screen.getByText('$15 - $20/hr')).toBeDefined()
    expect(screen.getByText('$95k - $130k')).toBeDefined()
  })

  it('renders tags', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Food')).toBeDefined()
    expect(screen.getByText('JavaScript')).toBeDefined()
    const reactTags = screen.getAllByText('React')
    expect(reactTags.length).toBeGreaterThanOrEqual(1)
  })
})
