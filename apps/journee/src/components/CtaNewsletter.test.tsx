import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ctaHeading, ctaScript, emailLabel, subscribeLabel } from '../data'
import { CtaNewsletter } from './CtaNewsletter'

describe('CtaNewsletter', () => {
  it('renders both headings, the email input, and the subscribe button', () => {
    const { container } = render(<CtaNewsletter />)
    expect(screen.getByRole('heading', { level: 5, name: ctaScript })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: ctaHeading })).toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('updates the email input as the user types', async () => {
    const user = userEvent.setup()
    render(<CtaNewsletter />)
    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'traveler@example.com')
    expect(input).toHaveValue('traveler@example.com')
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<CtaNewsletter />)
    const input = screen.getByLabelText(emailLabel)
    await user.type(input, 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))
    expect(input).toHaveValue('traveler@example.com')
  })
})
