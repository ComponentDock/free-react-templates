import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
})

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Sonority')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Sign In button', () => {
    render(<Navbar />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[1]!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when Sign In is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const signInLinks = screen.getAllByText('Sign In')
    await user.click(signInLinks[1]!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles dark mode via mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)

    const darkBtns = screen.getAllByRole('button', { name: 'Toggle dark mode' })
    await user.click(darkBtns[1]!)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles dark mode on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const darkBtn = screen.getByRole('button', { name: 'Toggle dark mode' })
    await user.click(darkBtn)

    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await user.click(darkBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('shows transparent header at top', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    fireEvent.scroll(window, { target: { scrollY: 100 } })

    expect(header.className).toContain('bg-brand-dark/95')
  })
})
