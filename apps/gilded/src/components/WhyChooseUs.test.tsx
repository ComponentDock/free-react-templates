import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and the four feature items', () => {
    render(<WhyChooseUs />)
    expect(screen.getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
    expect(screen.getByText(/we strive for live answer on our calls/i)).toBeInTheDocument()
    expect(screen.getByText(/a wide spectrum of skills and experience/i)).toBeInTheDocument()
    expect(screen.getByText(/fast response to requests/i)).toBeInTheDocument()
    expect(screen.getByText(/we help solve your business problems/i)).toBeInTheDocument()
  })
})
