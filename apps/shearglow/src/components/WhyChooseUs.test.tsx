import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and description', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByText(/At ShearGlow, we believe/i)).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('img', { name: 'ShearGlow salon experience' })).toBeInTheDocument()
  })

  it('renders four benefit bullet points', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/Professional stylists/i)).toBeInTheDocument()
    expect(screen.getByText(/Premium organic/i)).toBeInTheDocument()
    expect(screen.getByText(/Relaxing salon/i)).toBeInTheDocument()
    expect(screen.getByText(/Affordable luxury/i)).toBeInTheDocument()
  })
})
