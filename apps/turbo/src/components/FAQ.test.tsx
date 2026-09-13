import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the FAQ heading', () => {
    render(<FAQ />)
    expect(screen.getByRole('heading', { name: /frequently ask questions/i })).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<FAQ />)
    expect(screen.getByText('What is your opening time?')).toBeInTheDocument()
    expect(screen.getByText('Can I accept both Paypal and Stripe?')).toBeInTheDocument()
    expect(screen.getByText('What available is refund period?')).toBeInTheDocument()
    expect(screen.getByText('What are the requirements for support?')).toBeInTheDocument()
  })

  it('expands an answer when a question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const question = screen.getByText('What is your opening time?')
    await user.click(question)
    expect(screen.getByText(/aliquam assumenda eum blanditiis/i)).toBeInTheDocument()
  })

  it('collapses answer when the same question is clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const question = screen.getByText('What is your opening time?')
    await user.click(question)
    expect(screen.getByText(/aliquam assumenda eum blanditiis/i)).toBeInTheDocument()
    await user.click(question)
    expect(screen.queryByText(/aliquam assumenda eum blanditiis/i)).not.toBeInTheDocument()
  })

  it('sets aria-expanded on FAQ buttons', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const buttons = screen.getAllByRole('button')
    const firstButton = buttons[0]!
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  })
})
