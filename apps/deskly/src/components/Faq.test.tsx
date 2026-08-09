import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the section heading and five question items', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    for (const question of [
      'Can I try Deskly before committing?',
      'Do you have meeting rooms available?',
      'Is the space really open 24/7?',
      'Can I receive mail and packages?',
      'What is the cancellation policy?',
    ]) {
      expect(screen.getByRole('button', { name: question, expanded: false })).toBeInTheDocument()
    }
  })

  it('reveals the answer when a question is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', {
      name: 'Can I try Deskly before committing?',
    })
    await user.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/free day pass/i)).toBeInTheDocument()
  })

  it('collapses an open item when activated again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', {
      name: 'Can I try Deskly before committing?',
    })
    await user.click(question)
    await user.click(question)

    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/free day pass/i)).not.toBeInTheDocument()
  })

  it('switches to a different open item', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: 'Can I try Deskly before committing?' })
    const second = screen.getByRole('button', { name: 'Do you have meeting rooms available?' })

    await user.click(first)
    await user.click(second)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/booked by the hour/i)).toBeInTheDocument()
  })
})
