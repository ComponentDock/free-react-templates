import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, link columns and the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /sooth home/i })).toBeInTheDocument()
    for (const heading of ['Services', 'Visit Us', 'Connect', 'Stay Updated']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })

  it('shows a confirmation after subscribing with an email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
  })

  it('does nothing when the form is submitted without an email', () => {
    render(<Footer />)
    fireEvent.submit(document.querySelector('form')!)
    expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument()
  })
})
