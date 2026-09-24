import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the MicDrop logo', () => {
    render(<Navbar />)
    expect(screen.getByText('MicDrop')).toBeInTheDocument()
  })

  it('renders the home link with correct aria-label', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('MicDrop home')).toHaveAttribute('href', '/')
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Episodes', 'About', 'Sponsors', 'Newsletter', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument()
  })

  it('renders the Listen Now CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Listen Now')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle mobile menu')
    await user.click(toggle)
    expect(screen.getAllByText('Episodes').length).toBeGreaterThan(1)
    await user.click(toggle)
    expect(screen.getAllByText('Episodes').length).toBe(1)
  })

  it('has navigation role', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
