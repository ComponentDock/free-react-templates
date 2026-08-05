import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the link columns, newsletter form, social links, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Instagram Feed' })).toBeInTheDocument()

    const email = screen.getByLabelText('Email address')
    expect(email).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/Copyright © \d{4} Apps\. All rights reserved\./)).toBeInTheDocument()
  })

  it('clears the email input when the newsletter form is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const email = screen.getByLabelText('Email address')
    await user.type(email, 'hello@example.com')
    expect(email).toHaveValue('hello@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(email).toHaveValue('')
  })
})
