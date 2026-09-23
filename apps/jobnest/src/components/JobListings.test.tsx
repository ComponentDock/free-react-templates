import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { JobListings } from './JobListings'

describe('JobListings', () => {
  it('renders the heading, browse button, and 5 job cards', () => {
    render(<JobListings />)

    expect(screen.getByRole('heading', { level: 2, name: 'Job Listing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Browse More Job' })).toBeInTheDocument()

    const jobTitles = [
      'Senior UX Designer',
      'Marketing Manager',
      'Frontend Developer',
      'Data Analyst',
      'Project Manager',
    ]

    for (const title of jobTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const applyButtons = screen.getAllByText('Apply Now')
    expect(applyButtons).toHaveLength(5)

    const heartButtons = screen.getAllByLabelText(/Save/)
    expect(heartButtons).toHaveLength(5)
  })
})
