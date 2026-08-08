import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five collapsed questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByText(/you can try every paid tier/i)).not.toBeInTheDocument()
  })

  it('expands and collapses a question when clicked', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: /How does the free trial work\?/i })
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/you can try every paid tier/i)).toBeInTheDocument()

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/you can try every paid tier/i)).not.toBeInTheDocument()
  })

  it('opens one question at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const trial = screen.getByRole('button', { name: /How does the free trial work\?/i })
    const security = screen.getByRole('button', { name: /Is my data secure\?/i })

    await user.click(trial)
    await user.click(security)

    expect(trial).toHaveAttribute('aria-expanded', 'false')
    expect(security).toHaveAttribute('aria-expanded', 'true')
  })
})
