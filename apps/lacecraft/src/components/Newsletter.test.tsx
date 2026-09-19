import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Ready to Step Up Your Game/ }),
    ).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the Get 15% Off button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /Get 15% Off/ })).toBeInTheDocument()
  })

  it('renders the no spam disclaimer', () => {
    render(<Newsletter />)
    expect(screen.getByText(/No spam, unsubscribe anytime/)).toBeInTheDocument()
  })

  it('renders App Store and Google Play links', () => {
    render(<Newsletter />)
    expect(screen.getByText('App Store')).toBeInTheDocument()
    expect(screen.getByText('Google Play')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const btn = screen.getByRole('button', { name: /Get 15% Off/ })
    await user.click(btn)
  })
})
