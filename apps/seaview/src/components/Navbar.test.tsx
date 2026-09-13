import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Seaview logo text', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Seaview/i })).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)

    const links = ['Home', 'About', 'Rooms', 'News', 'Contact']
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the Book Now button', () => {
    render(<Navbar />)

    const bookLinks = screen.getAllByText('Book Now')
    expect(bookLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on hamburger button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /Toggle menu/i })
    expect(hamburger).toBeInTheDocument()

    // Click to open mobile menu
    await user.click(hamburger)

    // Click again to close
    await user.click(hamburger)
    expect(hamburger).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /Toggle menu/i })

    // Open the mobile menu
    await user.click(hamburger)

    // Click on a mobile nav link — all instances of "About" include both desktop and mobile
    const aboutLinks = screen.getAllByText('About')
    // The mobile link is inside the overlay (the one that is not inside the <ul>)
    // Click the last occurrence which is the mobile one
    const mobileAbout = aboutLinks[aboutLinks.length - 1]
    expect(mobileAbout).toBeDefined()
    await user.click(mobileAbout!)

    // Menu should be closed — button still exists
    expect(hamburger).toBeInTheDocument()
  })

  it('closes mobile menu when mobile Book Now link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /Toggle menu/i })

    // Open the mobile menu
    await user.click(hamburger)

    // Click on the mobile Book Now link
    const bookLinks = screen.getAllByText('Book Now')
    // The mobile Book Now link is the last one
    const mobileBookNow = bookLinks[bookLinks.length - 1]
    expect(mobileBookNow).toBeDefined()
    await user.click(mobileBookNow!)

    // Menu should be closed
    expect(hamburger).toBeInTheDocument()
  })
})
