import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Footer } from './Footer'
import {
  archives,
  copyright,
  credit,
  newsletterBlurb,
  newsletterError,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  newsletterTitle,
  quickLinks,
  socialLabels,
  socialLinks,
} from '../data'

describe('Footer', () => {
  it('renders the Quick Links, Archives and Social columns', () => {
    render(<Footer />)
    const quick = screen.getByRole('navigation', { name: 'Quick links' })
    for (const link of quickLinks) {
      expect(within(quick).getByRole('link', { name: link })).toBeInTheDocument()
    }
    const archiveNav = screen.getByRole('navigation', { name: 'Archives' })
    for (const month of archives) {
      expect(within(archiveNav).getByRole('link', { name: month })).toBeInTheDocument()
    }
    const social = screen.getByRole('navigation', { name: 'Social' })
    for (const name of socialLinks) {
      expect(within(social).getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('shows a validation error for an invalid email and blocks submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterBlurb)).toBeInTheDocument()
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears the error while the user types again', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(input, 'reader@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows a success state and resets the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', newsletterPlaceholder)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(input).toHaveValue('')
  })

  it('renders the bottom bar with copyright, credit link and back-to-top button', async () => {
    const user = userEvent.setup()
    const scrollSpy = vi.fn()
    window.scrollTo = scrollSpy
    render(<Footer />)
    expect(screen.getByText(copyright, { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: credit })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
    await user.click(screen.getByRole('button', { name: /back to top/i }))
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
