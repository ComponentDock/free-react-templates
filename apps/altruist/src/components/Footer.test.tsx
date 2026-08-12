import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three columns with copyright and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByText('Stay update with our latest')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
    expect(screen.getByText(/Copyright ©\d{4} All rights reserved/)).toBeInTheDocument()

    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `https://${label.toLowerCase()}.com`,
      )
    }
  })

  it('shows an error for an empty email and clears it on typing', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByText('Please enter your email')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'a@b.co' } })
    expect(screen.queryByText('Please enter your email')).not.toBeInTheDocument()
  })

  it('rejects a malformed email', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'nope' } })
    fireEvent.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms a valid subscription and clears the input', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Go' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks! You are now subscribed to our newsletter.',
    )
    expect(screen.getByLabelText('Email address')).toHaveValue('')
  })
})
