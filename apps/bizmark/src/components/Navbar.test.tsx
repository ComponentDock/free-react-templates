import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Bizmark')).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Blog', 'Page', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows hamburger button on mobile', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('expands mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // All links should still be in the document
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(1)
  })

  it('collapses menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    const contactLink = contactLinks[contactLinks.length - 1]!
    await user.click(contactLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
