import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('shows the script wordmark and the section links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Vesper home' })).toBeInTheDocument()
    expect(screen.getByText('Vesper')).toBeInTheDocument()

    for (const label of [
      'Home',
      'About',
      'Sermons',
      'Events',
      'Causes',
      'Blog',
      'Pastor',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('opens and closes the ministries dropdown', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const dropdown = screen.getByRole('button', { name: 'Ministries' })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Staff' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Volunteer' }).length).toBeGreaterThanOrEqual(1)

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Contact' }).length).toBe(2)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a drawer link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getAllByRole('link', { name: 'Sermons' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a drawer ministry link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    // The drawer lists every ministry link (the desktop dropdown is closed)
    expect(screen.getAllByRole('link', { name: 'Volunteer' })).toHaveLength(1)

    await user.click(screen.getAllByRole('link', { name: 'Volunteer' })[0]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches from transparent to solid on scroll and back', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
