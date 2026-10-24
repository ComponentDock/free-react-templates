import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four columns and the contact details', () => {
    render(<Footer />)
    for (const heading of ['About Us', 'Contact Info', 'Important Link', 'Newsletter']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: '+1 888 044 3388' })).toHaveAttribute(
      'href',
      'tel:+18880443388',
    )
    expect(screen.getByRole('link', { name: 'hello@manorly.com' })).toHaveAttribute(
      'href',
      'mailto:hello@manorly.com',
    )
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
  })

  it('asks for an address before confirming the newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), '  buyer@manorly.com  ')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — buyer@manorly.com is subscribed to Manorly news.',
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('credits Component Dock and no other marketplace', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © All rights reserved/)).toBeInTheDocument()
  })
})
