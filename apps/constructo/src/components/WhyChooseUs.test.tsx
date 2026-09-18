import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders section title', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders 3 feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/30\+ Years of Experience/)).toBeInTheDocument()
    expect(screen.getByText('Qualified Experts')).toBeInTheDocument()
    expect(screen.getByText('Best Customer Service')).toBeInTheDocument()
  })

  it('renders feature image', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('img', { name: /why choose/i })).toBeInTheDocument()
  })
})
