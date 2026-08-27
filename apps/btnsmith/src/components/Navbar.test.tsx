import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Btnsmith')).toBeInTheDocument()
    expect(screen.getByText('Solid')).toBeInTheDocument()
    expect(screen.getByText('Outline')).toBeInTheDocument()
    expect(screen.getByText('Dropdowns')).toBeInTheDocument()
    expect(screen.getByText('Groups')).toBeInTheDocument()
    expect(screen.getByText('Social & Slide')).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    expect(container.querySelector('#mobile-menu')).toBeInTheDocument()

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#mobile-menu')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a navigation link inside mobile menu is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggleButton)
    const mobileMenu = container.querySelector('#mobile-menu')!
    const link = mobileMenu.querySelector('a[href="#solid"]')!
    fireEvent.click(link)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Outline link is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggleButton)
    const mobileMenu = container.querySelector('#mobile-menu')!
    const link = mobileMenu.querySelector('a[href="#outline"]')!
    fireEvent.click(link)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Dropdowns link is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggleButton)
    const mobileMenu = container.querySelector('#mobile-menu')!
    const link = mobileMenu.querySelector('a[href="#dropdown"]')!
    fireEvent.click(link)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Groups link is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggleButton)
    const mobileMenu = container.querySelector('#mobile-menu')!
    const link = mobileMenu.querySelector('a[href="#groups"]')!
    fireEvent.click(link)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Social & Slide link is clicked', () => {
    const { container } = render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: 'Open menu' })
    fireEvent.click(toggleButton)
    const mobileMenu = container.querySelector('#mobile-menu')!
    const link = mobileMenu.querySelector('a[href="#social"]')!
    fireEvent.click(link)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
