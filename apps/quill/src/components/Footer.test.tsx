import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footerProducts, instaImages, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the link column, newsletter, instagram grid, social links and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    for (const product of footerProducts) {
      expect(screen.getByRole('link', { name: product })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(instaImages.length)
    for (const name of socialLinks) {
      expect(
        screen.getByRole('link', { name: name.charAt(0).toUpperCase() + name.slice(1) }),
      ).toBeInTheDocument()
    }
    expect(screen.getByText(/Copyright © 2026 Quill/i)).toBeInTheDocument()
  })

  it('shows a per-field error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('shows a success message for a valid email and unmounts the form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('clears the error as soon as the user edits the field again', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'bad')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), '@ok.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
