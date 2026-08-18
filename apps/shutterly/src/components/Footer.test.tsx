import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'
import { componentDockUrl } from '../data'

describe('Footer', () => {
  it('renders the four footer widgets', () => {
    render(<Footer />)

    expect(screen.getByText('Shutterly', { exact: true })).toBeInTheDocument()
    expect(screen.getByText(/Every image tells a story/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText('87/A, Green lane, CA 6732')).toBeInTheDocument()
    expect(screen.getByText('info@shutterly.com')).toBeInTheDocument()
    expect(screen.getByText('+10 236 327 3782')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      componentDockUrl,
    )
    for (const label of ['Facebook', 'X', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: `${label} profile` })).toBeInTheDocument()
    }
  })

  it('shows a success state after subscribing with a valid email', () => {
    render(<Footer />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'photo@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'SUBSCRIBE' }))

    expect(screen.getByRole('status', { name: /newsletter/i })).toHaveTextContent(/subscribed/i)
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument()
  })

  it('does not subscribe when the email is empty', () => {
    render(<Footer />)

    fireEvent.click(screen.getByRole('button', { name: 'SUBSCRIBE' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('scrolls to the top when the back-to-top button is clicked', () => {
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    render(<Footer />)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
