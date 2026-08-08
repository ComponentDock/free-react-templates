import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first quotation with an attribution', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Ducimus totam sit delectus/i)).toBeInTheDocument()
    expect(screen.getByText(/Mike Dorney/i)).toBeInTheDocument()
    expect(screen.getByText(/CEO and Co-Founder/i)).toBeInTheDocument()
  })

  it('advances to the next quote and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next quote/i }))
    expect(screen.getByText(/Eligendi earum ad perferendis/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Previous quote/i }))
    await user.click(screen.getByRole('button', { name: /Previous quote/i }))
    expect(screen.getByText(/Officia, eius omnis rem/i)).toBeInTheDocument()
  })

  it('jumps to a quote via its dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to quote 2' }))
    expect(screen.getByText(/Eligendi earum ad perferendis/i)).toBeInTheDocument()
  })
})
