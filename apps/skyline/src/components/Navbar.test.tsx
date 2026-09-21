import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Skyline/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /Menu/i })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: /Gallery/i })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the Book Table CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Book Table/i })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileNav = screen.getByLabelText('Mobile')
    const mobileHomeLink = within(mobileNav).getByRole('link', { name: /Home/i })
    await user.click(mobileHomeLink)

    expect(mobileNav).not.toBeInTheDocument()
  })
})
