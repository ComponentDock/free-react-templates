import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { contactRows, newsletterPlaceholder } from '../data'

describe('Footer', () => {
  it('renders the About Me widget with the intro paragraph', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByText(/Do you want to be even more successful/i)).toBeInTheDocument()
  })

  it('renders the Contact us widget with red icon rows', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    for (const row of contactRows) {
      expect(screen.getByRole('heading', { name: row.heading })).toBeInTheDocument()
      expect(screen.getByText(row.detail)).toBeInTheDocument()
    }
  })

  it('renders the Newsletter widget with an email input and arrow button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveAttribute(
      'placeholder',
      newsletterPlaceholder,
    )
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the copyright bar with a year and a Colorlib link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} All rights reserved`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Colorlib' })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
  })

  it('keeps the email when the newsletter form is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('reader@example.com')
  })
})
