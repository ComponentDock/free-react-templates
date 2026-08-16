import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the deep-teal band with heading, copy and the email form', () => {
    const { container } = render(<Newsletter />)

    expect(screen.getByRole('heading', { level: 2, name: newsletter.heading })).toBeInTheDocument()
    expect(screen.getByText(newsletter.copy)).toBeInTheDocument()
    expect(container.querySelector('section')!.className).toContain('bg-brand-deep')
    expect(screen.getByPlaceholderText(newsletter.placeholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.submitLabel })).toBeInTheDocument()
  })

  it('shows an error for an empty submit and no success message', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByText(newsletter.errorMessage)).toBeInTheDocument()
    expect(screen.queryByText(newsletter.successMessage)).not.toBeInTheDocument()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByPlaceholderText(newsletter.placeholder), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByText(newsletter.errorMessage)).toBeInTheDocument()
    expect(screen.queryByText(newsletter.successMessage)).not.toBeInTheDocument()
  })

  it('shows an error for a submit without the email field present', async () => {
    const user = userEvent.setup()
    const { container } = render(<Newsletter />)

    container.querySelector('input')!.remove()

    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByText(newsletter.errorMessage)).toBeInTheDocument()
    expect(screen.queryByText(newsletter.successMessage)).not.toBeInTheDocument()
  })

  it('shows the success message for a valid email without navigating', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByPlaceholderText(newsletter.placeholder), 'student@example.com')
    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByText(newsletter.successMessage)).toBeInTheDocument()
    expect(screen.queryByText(newsletter.errorMessage)).not.toBeInTheDocument()
  })
})
