import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the site name "Revolve"', () => {
    render(<Navbar />)
    expect(screen.getAllByText(/Revolve/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Slides' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Home link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileHomeLinks = screen.getAllByText('Home')
    fireEvent.click(mobileHomeLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Slides link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const links = screen.getAllByText('Slides')
    fireEvent.click(links[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when About link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const links = screen.getAllByText('About')
    fireEvent.click(links[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const links = screen.getAllByText('Contact')
    fireEvent.click(links[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles dark mode via desktop button', () => {
    render(<Navbar />)
    const darkToggle = screen.getByRole('button', { name: /switch to dark mode/i })
    expect(darkToggle).toBeInTheDocument()

    fireEvent.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('toggles dark mode via mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const darkBtns = screen.getAllByRole('button', { name: /dark mode/i })
    const mobileDarkBtn = darkBtns.find((btn) => !btn.getAttribute('aria-label'))
    expect(mobileDarkBtn).toBeTruthy()
    fireEvent.click(mobileDarkBtn!)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
