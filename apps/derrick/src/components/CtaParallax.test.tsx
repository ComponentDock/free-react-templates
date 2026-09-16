import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CtaParallax } from './CtaParallax'

describe('CtaParallax', () => {
  it('renders the heading', () => {
    render(<CtaParallax />)
    expect(screen.getByText('Experience Our Advance Equipments')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaParallax />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders the quote button', () => {
    render(<CtaParallax />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('calls onQuoteClick when button is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CtaParallax onQuoteClick={handleClick} />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
