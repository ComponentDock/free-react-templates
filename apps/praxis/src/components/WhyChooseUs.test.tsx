import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders section heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
    expect(screen.getByText('Why choose us?')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/commitment to excellence/)).toBeInTheDocument()
  })

  it('displays all three feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Only Top Products')).toBeInTheDocument()
    expect(screen.getByText('The Best Doctors')).toBeInTheDocument()
    expect(screen.getByText('Great Feedback')).toBeInTheDocument()
  })

  it('renders the clinic image', () => {
    render(<WhyChooseUs />)
    const img = screen.getByAltText('Clinic interior')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })
})
