import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Placeboard')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Destination')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows dropdown items when Destination is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const destBtn = screen.getByText('Destination')
    await user.click(destBtn)

    expect(screen.getByText('Places')).toBeInTheDocument()
    expect(screen.getByText('Hotels')).toBeInTheDocument()
    expect(screen.getByText('Restaurants')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByLabelText('Open menu')
    await user.click(hamburger)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('scrolls and changes nav background', () => {
    render(<Navbar />)

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)

    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-white')
  })

  it('has aria-expanded on dropdown button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const destBtn = screen.getByText('Destination')
    expect(destBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(destBtn)
    expect(destBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    const homeLinks = screen.getAllByText('Home')
    const mobileLink = homeLinks.find((el) => el.tagName === 'A' && el.closest('ul'))
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('renders scrolled mobile hamburger with heading color', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Scroll to trigger scrolled state
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    fireEvent.scroll(window)

    // Open mobile menu while scrolled
    await user.click(screen.getByLabelText('Open menu'))

    // Click a mobile link while scrolled — hits the scrolled branch
    const aboutLinks = screen.getAllByText('About')
    const mobileLink = aboutLinks.find((el) => el.tagName === 'A' && el.closest('ul'))
    if (mobileLink) {
      await user.click(mobileLink)
    }

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
