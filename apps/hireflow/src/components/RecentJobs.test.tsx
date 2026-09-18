import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RecentJobs } from './RecentJobs'

describe('RecentJobs', () => {
  it('renders section heading', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Recent Job Listings')).toBeInTheDocument()
    expect(screen.getByText('Latest opportunities from top companies')).toBeInTheDocument()
  })

  it('renders all job listings', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Senior React Developer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Backend Engineer')).toBeInTheDocument()
    expect(screen.getByText('DevOps Specialist')).toBeInTheDocument()
  })

  it('renders Apply Now buttons', () => {
    render(<RecentJobs />)
    const applyButtons = screen.getAllByText('Apply Now')
    expect(applyButtons.length).toBe(4)
  })

  it('renders job details (company, location, type, salary)', () => {
    render(<RecentJobs />)
    expect(screen.getByText('TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Remote')).toBeInTheDocument()
    expect(screen.getByText('$120k - $160k')).toBeInTheDocument()
    expect(screen.getAllByText('Full-time').length).toBeGreaterThanOrEqual(1)
  })
})
