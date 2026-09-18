import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and five questions with the first answer expanded', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()
    const buttons = screen.getAllByRole('button', { name: /how|what|will|do/i })
    expect(buttons).toHaveLength(5)
    expect(screen.getByText(/Most homeowners pay between/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /How much does a solar system cost/i }),
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands and collapses answers when activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const button = screen.getByRole('button', { name: /How long does installation take/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/one to three days/i)).toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
