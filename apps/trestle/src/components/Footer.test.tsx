import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders social links', () => {
    render(<Footer />)

    for (const name of ['Pinterest', 'LinkedIn', 'Instagram', 'Facebook', 'Twitter']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders link columns and the newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Site Map' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('subscribes with a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'studio@trestle.example')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })

  it('renders the copyright line', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Trestle\. All rights reserved/i)).toBeInTheDocument()
  })
})
