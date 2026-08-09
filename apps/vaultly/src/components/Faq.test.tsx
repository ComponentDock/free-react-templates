import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading, six questions, and the contact support link', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument()

    const questions = screen.getAllByRole('button', { name: /^(How|Is|What|Can)/ })
    expect(questions).toHaveLength(6)

    expect(screen.getByText(/Still have questions\?/)).toBeInTheDocument()
  })

  it('expands and collapses an answer when its question is activated', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const question = screen.getByRole('button', { name: /How does the AI financial advisor work/ })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/analyzes your accounts/i)).not.toBeInTheDocument()

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/analyzes your accounts/i)).toBeInTheDocument()

    await user.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/analyzes your accounts/i)).not.toBeInTheDocument()
  })
})
