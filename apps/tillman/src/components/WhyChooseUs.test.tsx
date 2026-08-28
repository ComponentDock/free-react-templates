import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Why you should/)).toBeInTheDocument()
  })

  it('renders three feature items', () => {
    render(<WhyChooseUs />)
    const features = screen.getAllByText(/Technological information and others/)
    expect(features.length).toBeGreaterThanOrEqual(3)
  })

  it('renders the phone CTA button', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('(10) 892-293 2678')).toBeInTheDocument()
  })

  it('renders floating badges', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText('Best Plants')).toBeInTheDocument()
    expect(screen.getByText('Award Winning')).toBeInTheDocument()
  })

  it('renders the section image', () => {
    render(<WhyChooseUs />)
    expect(screen.getByAltText('Agricultural equipment')).toBeInTheDocument()
  })
})
