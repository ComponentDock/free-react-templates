import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the heading, blurb, underline inputs and subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: newsletter.title })).toBeInTheDocument()
    expect(screen.getByText(newsletter.blurb)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletter.nameLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletter.emailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.submitLabel })).toBeInTheDocument()
  })

  it('shows validation errors for an empty name and an invalid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(newsletter.emailLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByText(newsletter.nameError)).toBeInTheDocument()
    expect(screen.getByText(newsletter.emailError)).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms the subscription for a valid name and email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText(newsletter.nameLabel), 'Ada Lovelace')
    await user.type(screen.getByLabelText(newsletter.emailLabel), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletter.successMessage)
  })
})
