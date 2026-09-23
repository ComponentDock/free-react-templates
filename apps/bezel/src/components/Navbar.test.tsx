import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Be')).toBeInTheDocument()
    expect(screen.getByText('zel')).toBeInTheDocument()
    // Desktop nav has these links; mobile duplicates them
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    expect(homeLinks[0]).toHaveAttribute('href', '#home')
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks[0]).toHaveAttribute('href', '#about')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Menu' })
    const mobileMenu = document.getElementById('mobile-menu')!

    expect(mobileMenu).toHaveClass('hidden')
    await user.click(menuButton)
    expect(mobileMenu).not.toHaveClass('hidden')

    await user.click(menuButton)
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Menu' })
    await user.click(menuButton)

    const mobileMenu = document.getElementById('mobile-menu')!
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    // The second About link is inside the mobile menu
    const mobileAboutLink = aboutLinks[1]!
    await user.click(mobileAboutLink)
    expect(mobileMenu).toHaveClass('hidden')
  })
})
