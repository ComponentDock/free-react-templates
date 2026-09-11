import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the BuildWell logo', () => {
    render(<Navbar />)
    expect(screen.getByText('BuildWell')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders contact info in the top bar', () => {
    render(<Navbar />)
    expect(screen.getByText(/1673 Marietta Street/)).toBeInTheDocument()
    expect(screen.getByText(/120 875 4578/)).toBeInTheDocument()
    expect(screen.getByText(/company@support.com/)).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuBtn)
    const aboutLinks = screen.getAllByText('About')
    const mobileAbout = aboutLinks[aboutLinks.length - 1]
    if (mobileAbout) await user.click(mobileAbout)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('has a search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
