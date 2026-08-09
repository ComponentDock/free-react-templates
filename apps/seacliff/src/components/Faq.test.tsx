import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

const questions = [
  'What are check-in and check-out times?',
  'What is your cancellation policy?',
  'Do you allow pets?',
  'Is airport transfer available?',
  'Do you have room service?',
]

describe('Faq', () => {
  it('renders the heading and five question items', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    for (const question of questions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands an item to reveal its answer and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: questions[0]! })
    expect(first).toHaveAttribute('aria-expanded', 'false')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Check-in begins at 3:00 PM/)).toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches between items so only one is open at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: questions[0]! }))
    await user.click(screen.getByRole('button', { name: questions[1]! }))

    expect(screen.getByRole('button', { name: questions[0]! })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: questions[1]! })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
