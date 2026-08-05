import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about blurb, link columns, contact details, newsletter, socials, and copyright', () => {
    render(<Footer />)

    for (const column of ['About Us', 'Contact Info', 'Important Link', 'Newsletter']) {
      expect(screen.getByRole('heading', { level: 2, name: column })).toBeInTheDocument()
    }

    for (const label of ['Home', 'Services', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/hello@itkol\.example/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/Copyright © \d{4} Itkol/)).toBeInTheDocument()
  })

  it('submits the newsletter form without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'hello@example.com')
    expect(input).toHaveValue('hello@example.com')

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('hello@example.com')
  })
})
