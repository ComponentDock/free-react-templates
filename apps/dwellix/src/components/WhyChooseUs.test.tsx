import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Why/)).toBeInTheDocument()
    expect(screen.getByText(/Choose Us\?/)).toBeInTheDocument()
  })

  it('renders all 3 feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Find Your Home')).toBeInTheDocument()
    expect(screen.getByText('Transportation Support')).toBeInTheDocument()
    expect(screen.getByText('Save Your Money')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Browse through thousands of listings/)).toBeInTheDocument()
    expect(
      screen.getByText(/comprehensive information about nearby transportation/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Get the best deals/)).toBeInTheDocument()
  })
})
