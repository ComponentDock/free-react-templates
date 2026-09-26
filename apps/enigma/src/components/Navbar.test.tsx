import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Enigma')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the CTA button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Get in touch' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)

    const mobileNav = screen.getByLabelText('Mobile navigation')
    expect(mobileNav).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)

    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const mobileLink = mobileLinks[1]!
    await user.click(mobileLink)

    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
