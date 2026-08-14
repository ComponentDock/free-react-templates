import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedJobs } from './FeaturedJobs'

describe('FeaturedJobs', () => {
  it('renders the subheading and heading', () => {
    render(<FeaturedJobs />)
    expect(screen.getByText('Recently Added Jobs')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Featured Jobs Posts For This Week' }),
    ).toBeInTheDocument()
  })

  it('renders nine job cards with badge, title, company and location', () => {
    render(<FeaturedJobs />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(9)
    expect(screen.getAllByText('Frontend Development')).toHaveLength(3)
    expect(screen.getAllByText('Full Stack Developer')).toHaveLength(2)
    expect(screen.getAllByText('Open Source Interactive Developer')).toHaveLength(4)
    expect(screen.getAllByText('Partime')).toHaveLength(2)
    expect(screen.getAllByText('Fulltime')).toHaveLength(2)
    expect(screen.getAllByText(/Facebook, Inc\./)).toHaveLength(3)
    expect(screen.getAllByText(/Western City, UK/)).toHaveLength(9)
  })

  it('renders a heart button and Apply Job button on every card', () => {
    render(<FeaturedJobs />)
    expect(screen.getAllByRole('button', { name: /Save / })).toHaveLength(9)
    expect(screen.getAllByRole('link', { name: 'Apply Job' })).toHaveLength(9)
  })
})
