import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the heading and all six questions with the first answer open', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 2, name: 'Common Questions' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('button').filter((button) => button.getAttribute('aria-expanded')),
    ).toHaveLength(6)
    expect(
      screen.getByText(
        'We offer auto, home, life, health, business, and umbrella insurance — plus bundled packages that combine multiple policies for a discount.',
      ),
    ).toBeInTheDocument()
  })

  it('reveals the answer of the activated question and collapses the previous one', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const claimButton = screen.getByRole('button', {
      name: 'How do I file a claim?',
    })
    await user.click(claimButton)
    expect(claimButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(
        'File online, in the app, or by phone. Most claims are acknowledged within minutes and approved within one business day.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/bundled packages that combine multiple policies/),
    ).not.toBeInTheDocument()
  })

  it('collapses the open question when activated again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstButton = screen.getAllByRole('button')[0]!
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByText(/bundled packages that combine multiple policies/),
    ).not.toBeInTheDocument()
  })
})
