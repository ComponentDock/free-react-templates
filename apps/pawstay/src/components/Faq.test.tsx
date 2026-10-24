import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('shows the heading and the four question items with answers', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asks Questions' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'How to train your pet dog?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'How to manage your pets?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'What is the best grooming for your pets?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'What are those requirements for sitting pets?',
      }),
    ).toBeInTheDocument()
  })

  it('reveals the answer when a question is activated and hides it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: /How to train your pet dog\?/ })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Start with short, positive sessions/)).toBeInTheDocument()

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
  })
})
