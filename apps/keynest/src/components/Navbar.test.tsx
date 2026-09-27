import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Keynest logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Key')).toBeInTheDocument()
    expect(screen.getByText('nest')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Property', 'About', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the phone number button', () => {
    render(<Navbar />)
    expect(screen.getByText('+10 (65) 672 2674')).toBeInTheDocument()
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('mobile menu button is clickable', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByLabelText('Toggle menu')
    await user.click(btn)
    // button exists and is clickable (no error thrown)
    expect(btn).toBeInTheDocument()
  })
})
