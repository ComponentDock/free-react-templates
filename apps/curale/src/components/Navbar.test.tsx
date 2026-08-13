import { render, screen, within, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { brand, navLinks, topBar } from '../data'
import { socialIcons } from './social-icons'

describe('Navbar', () => {
  it('renders the top info bar with contact info and social icons', () => {
    render(<Navbar />)
    expect(
      screen.getByText(
        (content) => content.includes('call us now!') && content.includes(topBar.phone),
      ),
    ).toBeInTheDocument()
    expect(screen.getByText(topBar.email)).toBeInTheDocument()
    expect(screen.getByText(topBar.location)).toBeInTheDocument()
    for (const { label } of socialIcons) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the brand logo with the blue accent border and cross', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: brand })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo).toHaveClass('border-brand')
  })

  it('renders all primary nav links with their hrefs', () => {
    render(<Navbar />)
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const item of navLinks) {
      if (!item.children) {
        expect(primary.querySelector(`a[href="${item.href}"]`)).toHaveTextContent(item.label)
      }
    }
  })

  it('renders dropdown children for Pages and Blog', () => {
    render(<Navbar />)
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    const groups = primary.querySelectorAll('div.group')
    let groupIndex = 0
    for (const item of navLinks) {
      if (item.children) {
        const dropdown = groups[groupIndex] as HTMLElement
        for (const child of item.children) {
          expect(
            within(dropdown).getByRole('link', { name: child.label, hidden: true }),
          ).toBeInTheDocument()
        }
        groupIndex += 1
      }
    }
  })

  it('starts transparent and switches to the scrolled surface background', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('[data-testid="main-nav"]') as HTMLElement
    expect(nav).not.toHaveClass('bg-surface')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveClass('bg-surface')
    expect(nav).toHaveClass('top-0')
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('shows all links and dropdown children inside the mobile panel', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const item of navLinks) {
      if (item.children) {
        for (const child of item.children) {
          expect(within(mobileNav).getByRole('link', { name: child.label })).toBeInTheDocument()
        }
      } else {
        expect(mobileNav.querySelector(`a[href="${item.href}"]`)).toHaveTextContent(item.label)
      }
    }
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const link = screen
      .getByRole('navigation', { name: 'Mobile' })
      .querySelector('a[href="#doctors"]') as HTMLElement

    fireEvent.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown child link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const childLink = within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
      name: 'about us',
    })
    fireEvent.click(childLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
