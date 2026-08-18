import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the newsletter heading, email input, and Subscribe button', () => {
    render(<Subscribe />)

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.textContent).toContain('Subscribe our newsletter')

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows a success message after submitting an email', async () => {
    render(<Subscribe />)
    const user = userEvent.setup()

    await user.click(screen.getByLabelText(/email address/i))
    await user.keyboard('candidate@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByText(/you're subscribed/i)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /subscribe/i })).not.toBeInTheDocument()
  })

  it('does not submit an empty email', async () => {
    render(<Subscribe />)
    const user = userEvent.setup()

    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.queryByText(/you're subscribed/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })
})
