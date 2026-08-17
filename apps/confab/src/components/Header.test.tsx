import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand, nav links and the buy-your-seat CTA', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('link', { name: /Confab/ })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Speakers' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Schedule' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Location' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    const ctas = screen.getAllByRole('link', { name: /Buy Your Seat/ })
    expect(ctas.length).toBeGreaterThanOrEqual(1)
    expect(container.querySelector('#mobile-menu')).toBeInTheDocument()
  })

  it('gains the near-black background once the page scrolls', () => {
    render(<Header />)

    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('bg-coal')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('bg-coal')
  })

  it('opens and closes the mobile drawer', () => {
    const { container } = render(<Header />)

    const drawer = container.querySelector('#mobile-menu')!
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(drawer).not.toHaveClass('translate-x-full')

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(drawer).toHaveClass('translate-x-full')
  })

  it('closes the drawer when the mobile CTA is activated', () => {
    const { container } = render(<Header />)

    const drawer = container.querySelector('#mobile-menu')!
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(drawer).not.toHaveClass('translate-x-full')

    const cta = within(drawer as HTMLElement).getByRole('link', {
      name: /Buy Your Seat/,
    })
    fireEvent.click(cta)

    expect(drawer).toHaveClass('translate-x-full')
  })

  it('closes the drawer when a mobile nav link is activated', () => {
    const { container } = render(<Header />)

    const drawer = container.querySelector('#mobile-menu')!
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const link = within(drawer as HTMLElement).getByRole('link', {
      name: 'Schedule',
    })
    link.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    })
    fireEvent.click(link)

    expect(drawer).toHaveClass('translate-x-full')
  })
})
