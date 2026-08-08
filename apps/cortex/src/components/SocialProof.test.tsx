import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialProof } from './SocialProof'

describe('SocialProof', () => {
  it('renders the heading and both testimonial quotes', () => {
    render(<SocialProof />)
    expect(
      screen.getByRole('heading', { name: /Trusted by AI Teams Everywhere/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/cut our agent development time/i)).toBeInTheDocument()
    expect(screen.getByText(/40% lower latency/i)).toBeInTheDocument()
  })

  it('renders the authors and their roles', () => {
    render(<SocialProof />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('CTO, DataPilot AI')).toBeInTheDocument()
    expect(screen.getByText('Marcus Webb')).toBeInTheDocument()
    expect(screen.getByText('Head of Engineering, Northwind Labs')).toBeInTheDocument()
  })
})
