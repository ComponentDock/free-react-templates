import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  copyright,
  credit,
  footerBlurb,
  newsletterError,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  siteName,
} from '../data'

describe('Footer', () => {
  it('renders the wordmark, blurb and newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByText(footerBlurb)).toBeInTheDocument()
    expect(screen.getByLabelText(newsletterLabel)).toHaveAttribute(
      'placeholder',
      newsletterPlaceholder,
    )
    expect(screen.getByRole('button', { name: newsletterSubmitLabel })).toBeInTheDocument()
  })

  it('shows a validation error for an invalid email and blocks submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(newsletterLabel), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toHaveTextContent(newsletterError)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears the error while the user types again', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(newsletterLabel)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
    await user.type(input, 'reader@example.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows a success state and resets the input for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(newsletterLabel)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: newsletterSubmitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(input).toHaveValue('')
  })

  it('renders the bottom bar with copyright and the ColorLib credit link', () => {
    render(<Footer />)
    expect(screen.getByText(copyright, { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: credit })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
  })
})
