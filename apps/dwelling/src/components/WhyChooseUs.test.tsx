import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('We Provide Great Services')).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Find your future home')).toBeInTheDocument()
    expect(screen.getByText('Buy or rent homes')).toBeInTheDocument()
    expect(screen.getByText('Experienced agents')).toBeInTheDocument()
    expect(screen.getByText('List your own property')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/We help you find a new home/)).toBeInTheDocument()
  })
})
