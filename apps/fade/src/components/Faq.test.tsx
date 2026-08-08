import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five accordion questions', () => {
    render(<Faq />)

    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const questions = [
      'Do I need an appointment?',
      'How long does a typical haircut take?',
      "What if I'm not sure what style I want?",
      "Do you cut children's hair?",
      'What products do you use?',
    ]
    for (const q of questions) {
      expect(screen.getByRole('button', { name: q })).toBeInTheDocument()
    }
  })

  it('expands an answer when its toggle is activated and collapses it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Do I need an appointment?' })
    expect(screen.queryByText(/Walk-ins are always welcome/)).not.toBeInTheDocument()

    await user.click(first)
    expect(screen.getByText(/Walk-ins are always welcome/)).toBeInTheDocument()

    await user.click(first)
    expect(screen.queryByText(/Walk-ins are always welcome/)).not.toBeInTheDocument()
  })
})
