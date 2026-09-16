import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedCauses } from './FeaturedCauses'

describe('FeaturedCauses', () => {
  it('renders section heading', () => {
    render(<FeaturedCauses />)
    expect(screen.getByRole('heading', { name: /featured causes/i })).toBeInTheDocument()
  })

  it('renders three cause cards with titles', () => {
    render(<FeaturedCauses />)
    expect(screen.getByText('Education for every child')).toBeInTheDocument()
    expect(screen.getByText('Feeding the hungry people')).toBeInTheDocument()
    expect(screen.getByText('Providing cloth for people')).toBeInTheDocument()
  })

  it('displays raised and goal amounts', () => {
    render(<FeaturedCauses />)
    const raised = screen.getAllByText(/Raised: \$1,533/)
    expect(raised.length).toBe(3)
    const goals = screen.getAllByText(/Goal: \$2,500/)
    expect(goals.length).toBe(3)
  })

  it('displays donor counts', () => {
    render(<FeaturedCauses />)
    const donors = screen.getAllByText(/90 Donors/)
    expect(donors.length).toBe(3)
  })

  it('renders donate buttons', () => {
    render(<FeaturedCauses />)
    const donateButtons = screen.getAllByRole('button', { name: /donate/i })
    expect(donateButtons.length).toBe(3)
  })

  it('renders progress bars with correct aria attributes', () => {
    render(<FeaturedCauses />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars.length).toBe(3)
    progressBars.forEach((bar) => {
      expect(bar).toHaveAttribute('aria-valuenow', '1533')
      expect(bar).toHaveAttribute('aria-valuemin', '0')
      expect(bar).toHaveAttribute('aria-valuemax', '2500')
    })
  })
})
