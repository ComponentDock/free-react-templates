import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all six question items', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const question of [
      'How do I get started with Appco?',
      'Is there a free trial available?',
      'Can I switch between plans?',
      'Is my data secure?',
      'What payment methods do you accept?',
      'How can I contact support?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses an item when its question is clicked', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const button = screen.getByRole('button', { name: 'How do I get started with Appco?' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/Sign up for a free account/)).not.toBeVisible()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Sign up for a free account/)).toBeVisible()

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/Sign up for a free account/)).not.toBeVisible()
  })
})
