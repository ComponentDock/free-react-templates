import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the wordmark, nav links and search icon', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Corona' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Courses', 'Contacts']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    // Search icon is decorative (li aria-hidden) — assert via its class instead.
    expect(document.querySelector('nav svg.lucide-search')).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Course Details' })).toBeInTheDocument()

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('opens and closes the Blog dropdown and closes it on item click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogButton = screen.getByRole('button', { name: /Blog/ })
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Home' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the Pages dropdown when a dropdown link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('link', { name: 'Elements' }))
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Contacts' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a section link or dropdown link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Home' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Elements' })[0]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
