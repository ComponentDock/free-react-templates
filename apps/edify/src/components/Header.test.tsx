import { afterEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY')

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Header', () => {
  it('renders the wordmark, nav links, and Join / Log in actions', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Edify home' })).toHaveTextContent('Edify')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Home', 'Courses', 'About', 'Blog', 'Contact']) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Log in' })).toBeInTheDocument()
  })

  it('becomes sticky with a gradient background after scrolling', () => {
    render(<Header />)

    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')

    setScrollY(300)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-gradient-to-r')
    expect(header.className).toContain('shadow-')

    setScrollY(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens and closes the mobile menu via the toggle and close button', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Courses' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Join Now' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link, an action, or the backdrop is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Blog',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Join Now',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Log in',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

afterEach(() => {
  if (originalScrollY) {
    Object.defineProperty(window, 'scrollY', originalScrollY)
  }
})
