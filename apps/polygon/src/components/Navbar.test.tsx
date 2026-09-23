import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Polygon')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Contact Us CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('toggles dark mode on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const darkBtn = screen.getByLabelText('Toggle dark mode')
    await user.click(darkBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(darkBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    // Mobile nav should be visible
    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))

    // Click a mobile link
    const mobileNav = screen.getByLabelText('Mobile')
    const mobileLink = within(mobileNav).getByText('About')
    await user.click(mobileLink)

    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('has correct nav link hrefs', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink).toHaveAttribute('href', '#home')
  })

  it('has correct aria labels', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Primary')).toBeInTheDocument()
    expect(screen.getByLabelText('Toggle dark mode')).toBeInTheDocument()
  })

  it('starts with dark mode off', () => {
    render(<Navbar />)
    expect(screen.getByText('☾')).toBeInTheDocument()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('cleans up dark class on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
