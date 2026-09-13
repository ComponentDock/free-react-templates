import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the heading and all four questions', () => {
    render(<FAQ />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const q of [
      'What services does Netforge offer?',
      'How long does a typical project take?',
      'Do you provide ongoing support?',
      'What industries do you work with?',
    ]) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('expands and collapses answers on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const btn = screen.getByRole('button', { name: 'What services does Netforge offer?' })

    // Initially collapsed
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/We offer web development/)).not.toBeInTheDocument()

    // Expand
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/We offer web development/)).toBeInTheDocument()

    // Collapse
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/We offer web development/)).not.toBeInTheDocument()
  })
})
