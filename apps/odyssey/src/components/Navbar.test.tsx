import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the paper-plane logo, the site name, and the main navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Odyssey' })).toBeInTheDocument()
    for (const label of ['Home', 'Category', 'Archive', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['Pages', 'Blog']) {
      expect(screen.getByRole('button', { name: `Toggle ${label} submenu` })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('starts transparent and switches to the purple background after scrolling', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true, writable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(banner.className).toContain('bg-brand/90')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('reveals the dropdown child links when a dropdown toggle is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesToggle = screen.getByRole('button', { name: 'Toggle Pages submenu' })
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    await user.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const archiveLinks = screen.getAllByRole('link', { name: 'Archive' })
    const archiveLink = archiveLinks[archiveLinks.length - 1]
    expect(archiveLink).toBeDefined()
    await user.click(archiveLink!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens a dropdown inside the mobile menu with an open label', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const pagesToggles = screen.getAllByRole('button', { name: 'Toggle Pages submenu' })
    const pagesToggle = pagesToggles[pagesToggles.length - 1]
    expect(pagesToggle).toBeDefined()
    await user.click(pagesToggle!)
    expect(screen.getByLabelText('Pages submenu open')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Elements' }).length).toBeGreaterThan(0)
    const blogToggles = screen.getAllByRole('button', { name: 'Toggle Blog submenu' })
    const blogToggle = blogToggles[blogToggles.length - 1]
    expect(blogToggle).toBeDefined()
    await user.click(blogToggle!)
    expect(screen.getByLabelText('Blog submenu open')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Blog Details' }).length).toBeGreaterThan(0)
  })

  it('closes the mobile menu when a dropdown child link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)
    const pagesToggles = screen.getAllByRole('button', { name: 'Toggle Pages submenu' })
    await user.click(pagesToggles[pagesToggles.length - 1]!)
    const elementsLinks = screen.getAllByRole('link', { name: 'Elements' })
    await user.click(elementsLinks[elementsLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
