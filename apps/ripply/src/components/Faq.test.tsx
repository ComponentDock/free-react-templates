import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

const QUESTIONS = [
  'Is it a long established fact that a reader will be distracted?',
  'How do I install the app on my device?',
  'Can I upgrade my plan later?',
  'Do you offer support for teams?',
]

describe('Faq', () => {
  it('renders the title and four questions with the first one open', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Question' }),
    ).toBeInTheDocument()
    for (const question of QUESTIONS) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: QUESTIONS[0] })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText(/readable content of a page/i)).toBeInTheDocument()
  })

  it('collapses an open question and expands another', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    // Collapse the initially open first question.
    await user.click(screen.getByRole('button', { name: QUESTIONS[0] }))
    expect(screen.getByRole('button', { name: QUESTIONS[0] })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByText(/readable content of a page/i)).not.toBeInTheDocument()

    // Expand a different question — the active state moves.
    await user.click(screen.getByRole('button', { name: QUESTIONS[1] }))
    expect(screen.getByRole('button', { name: QUESTIONS[1] })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText(/setup takes less than a minute/i)).toBeInTheDocument()
  })
})
