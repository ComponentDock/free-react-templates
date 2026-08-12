import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, both link columns and the subscribe form', () => {
    render(<Footer />)

    expect(screen.getByText('Garment')).toBeInTheDocument()
    for (const link of ['Shop', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of [
      'Order Status',
      'Payment Options',
      'Shipping and Delivery',
      'Guides',
      'Privacy Policy',
      'Terms of Use',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows the five social icons and the copyright with a Component Dock link', () => {
    render(<Footer />)

    for (const social of ['Facebook', 'Instagram', 'Twitter', 'Pinterest', 'YouTube']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows a success message and unmounts the form for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'shopper@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
