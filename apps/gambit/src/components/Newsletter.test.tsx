import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { NEWSLETTER_HEADING, NEWSLETTER_BLURB } from '../data'

describe('Newsletter', () => {
  it('renders the gradient band with heading, blurb, and pill input', () => {
    const { container } = render(<Newsletter />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('from-brand')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(NEWSLETTER_HEADING)
    expect(screen.getByText(NEWSLETTER_BLURB)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows a success state after submitting a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText(/email address/i), 'player@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/you're in/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument()
  })
})
