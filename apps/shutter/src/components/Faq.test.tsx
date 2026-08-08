import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    for (const question of [
      'How do I book a session?',
      'How long until I receive my photos?',
      'What is your editing style?',
      'Do you travel for shoots?',
      'Can I order prints?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands an item to reveal its answer and reflects the state', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const toggle = screen.getByRole('button', { name: 'How do I book a session?' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/booking is easy/i)).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/booking is easy/i)).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/booking is easy/i)).not.toBeInTheDocument()
  })

  it('opens only one item at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(screen.getByRole('button', { name: 'Do you travel for shoots?' }))
    expect(screen.getByText(/yes! i love traveling/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Can I order prints?' }))
    expect(screen.getByText(/professional fine art print labs/i)).toBeInTheDocument()
    expect(screen.queryByText(/yes! i love traveling/i)).not.toBeInTheDocument()
  })
})
