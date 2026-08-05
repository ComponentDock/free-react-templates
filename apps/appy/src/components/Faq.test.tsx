import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and three expandable questions', () => {
    render(<Faq />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Is Appy really free to use?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Can I customize the design?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Does Appy support my app platform?' }),
    ).toBeInTheDocument()
  })

  it('reveals the answer when a question is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: 'Is Appy really free to use?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Yes, Appy is completely free/)).toBeInTheDocument()
  })

  it('collapses the answer when the active question is activated again', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: 'Can I customize the design?' })
    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/every section, color, and layout block/)).not.toBeInTheDocument()
  })
})
