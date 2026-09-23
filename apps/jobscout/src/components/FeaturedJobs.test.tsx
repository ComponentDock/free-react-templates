import { render, screen } from '@testing-library/react'
import { FeaturedJobs } from './FeaturedJobs'

describe('FeaturedJobs', () => {
  it('renders the section heading', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText('Featured Jobs')).toBeInTheDocument()
  })

  it('renders 4 job cards', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText('Digital Marketer')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
  })

  it('shows job details like company, location, salary', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText('Creative Agency')).toBeInTheDocument()
    expect(screen.getByText('Athens, Greece')).toBeInTheDocument()
    expect(screen.getByText('$3,500 - $4,000')).toBeInTheDocument()
  })

  it('shows job type badges', () => {
    render(<FeaturedJobs />)
    const fullTimeBadges = screen.getAllByText('Full Time')
    expect(fullTimeBadges.length).toBe(3)
    expect(screen.getByText('Part Time')).toBeInTheDocument()
  })
})
