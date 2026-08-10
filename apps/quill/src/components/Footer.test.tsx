import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footerLinks, instagramSeeds, newsletterCopy } from '../data'

describe('Footer', () => {
  it('renders the Top Products link column, newsletter copy and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(newsletterCopy)).toBeInTheDocument()
    expect(screen.getByText(/Copyright © 2026 All rights reserved/)).toBeInTheDocument()
  })

  it('renders eight Instagram feed thumbnails and four social links', () => {
    render(<Footer />)

    const feed = screen.getByRole('heading', { name: 'Instagram Feed' }).closest('div')!
    expect(feed.querySelectorAll('img')).toHaveLength(instagramSeeds.length)

    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows a per-field error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email')

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
  })

  it('shows a success message for a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks! You are subscribed to our newsletter.',
    )
    expect(input).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
