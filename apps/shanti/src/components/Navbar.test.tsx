import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, lotus icon and primary links with the active link in mauve', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Shanti/i })).toBeInTheDocument()
    for (const label of ['Home', 'Classes', 'Schedule', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home.className).toContain('text-mauve-500')
  })

  it('is transparent over the hero and becomes a fixed white bar after scrolling', () => {
    const original = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    const { container, unmount } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')

    unmount()
    Object.defineProperty(window, 'scrollY', {
      value: original,
      writable: true,
      configurable: true,
    })
  })

  it('toggles the mobile menu with aria-expanded and closes it on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const links = screen.getAllByRole('link', { name: 'Classes' })
    expect(links.length).toBeGreaterThanOrEqual(2)
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const reopened = screen.getAllByRole('link', { name: 'Classes' })
    await user.click(reopened[reopened.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
