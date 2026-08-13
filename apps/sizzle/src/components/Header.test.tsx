import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brand, navItems } from '../data'

describe('Header', () => {
  it('renders the circular logo badge with the brand name', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: brand.name })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: brand.name })).toHaveClass('rounded-full')
    expect(screen.getByRole('link', { name: brand.name })).toHaveClass('bg-brand')
  })

  it('renders all desktop nav links', () => {
    render(<Header />)
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })

  it('starts transparent and gains the scrolled background after scrolling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-header-scrolled')
  })

  it('hides the logo top row in the scrolled state', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: brand.name })
    expect(logo).toBeVisible()

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(logo.parentElement).toHaveClass('max-h-0')
  })

  it('shows the dropdown on hover and hides it on leave', () => {
    render(<Header />)
    const blog = navItems.find((item) => item.children)!
    const blogLink = screen.getAllByRole('link', { name: blog.label })[0]!
    const dropdownItem = blog.children![0]!

    fireEvent.mouseEnter(blogLink)
    expect(screen.getByRole('link', { name: dropdownItem })).toBeInTheDocument()

    fireEvent.mouseLeave(blogLink)
    expect(screen.queryByRole('link', { name: dropdownItem })).not.toBeInTheDocument()
  })

  it('keeps the dropdown closed when hovering a plain link', () => {
    render(<Header />)
    const homeLink = screen.getAllByRole('link', { name: 'Home' })[0]!
    const blog = navItems.find((item) => item.children)!
    const dropdownItem = blog.children![0]!

    fireEvent.mouseEnter(homeLink)
    expect(screen.queryByRole('link', { name: dropdownItem })).not.toBeInTheDocument()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('renders child links inside the mobile menu panel', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const withChildren = navItems.find((item) => item.children)!
    for (const child of withChildren.children!) {
      expect(screen.getAllByRole('link', { name: child }).length).toBeGreaterThan(0)
    }
  })

  it('closes the mobile menu when a top-level link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const homeLink = screen.getAllByRole('link', { name: 'Home' })[1]!

    fireEvent.click(homeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a child link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const withChildren = navItems.find((item) => item.children)!
    const childLink = screen.getAllByRole('link', { name: withChildren.children![0] })[0]!
    fireEvent.click(childLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const backdrop = document.querySelector('.bg-black\\/50') as HTMLElement
    fireEvent.click(backdrop)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
