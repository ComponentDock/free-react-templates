import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, newsletter, socials, and copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('subscribes an email and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'a@b.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByRole('textbox', { name: /email address/i })).not.toBeInTheDocument()
  })
})
