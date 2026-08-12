import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_ABOUT_LINKS, FOOTER_FEATURE_LINKS } from '../data'

describe('Footer', () => {
  it('renders the four columns, social icons and bottom bar', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Haulage' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe to Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()

    for (const link of FOOTER_ABOUT_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of FOOTER_FEATURE_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    for (const label of ['Twitter', 'Facebook', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('rejects an invalid newsletter email', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'not-an-email' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an empty newsletter email', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
  })

  it('subscribes a valid email and clears the error on typing', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'reader@example.com' },
    })
    expect(screen.queryByText('Please enter your email')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks! You are now subscribed to our newsletter.',
    )
  })
})
