import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all four questions', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument()
    for (const question of [
      'What services do you offer?',
      'How do we get started?',
      'How many projects do you take on at a time?',
      'Do you work with startups and agencies?',
    ]) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('expands and collapses answers', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: /what services do you offer/i })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/end-to-end product development/i)).toBeInTheDocument()

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/end-to-end product development/i)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /how do we get started/i }))
    expect(screen.getByText(/discovery call to discuss your project/i)).toBeInTheDocument()
  })
})
