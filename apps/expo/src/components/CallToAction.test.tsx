import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading', () => {
    render(<CallToAction />)
    expect(
      screen.getByRole('heading', {
        name: /Let's talk about your project/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CallToAction />)
    expect(screen.getByText(/first step towards growing your brand/i)).toBeInTheDocument()
  })

  it('renders the Start Talking button', () => {
    render(<CallToAction />)
    const btn = screen.getByRole('link', { name: 'Start Talking' })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#contact')
  })
})
