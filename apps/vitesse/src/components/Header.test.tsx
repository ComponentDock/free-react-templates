import { afterEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
  })

  it('renders the dark utility bar with phone, email, and social links', () => {
    render(<Header />)
    expect(screen.getByText(/Phone: \+1 555-010-0142/)).toBeInTheDocument()
    expect(screen.getByText(/Email: hello@example\.com/)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'LinkedIn', 'Website']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Vitesse wordmark, nav links, and Get A Quote CTA', () => {
    render(<Header />)
    const main = screen.getByRole('navigation', { name: 'Main' })
    expect(screen.getAllByText('Vitesse').length).toBeGreaterThanOrEqual(1)
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      const hits =
        within(main).queryAllByRole('link', { name: label }).length +
        within(main).queryAllByRole('button', { name: label }).length
      expect(hits).toBeGreaterThanOrEqual(1)
    }
    expect(within(main).getByRole('link', { name: 'Get A Quote' })).toHaveAttribute(
      'href',
      '#quote',
    )
  })

  it('reveals the Blog dropdown on hover and hides it again on leave', () => {
    render(<Header />)
    const trigger = screen.getByRole('button', { name: 'Blog' })
    const wrapper = trigger.parentElement!
    const dropdown = screen.getByRole('link', { name: 'Blog Details' }).closest('ul')!
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(dropdown.className).toContain('hidden')

    fireEvent.mouseEnter(wrapper)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(dropdown.className).toContain('block')

    fireEvent.mouseLeave(wrapper)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(dropdown.className).toContain('hidden')
  })

  it('opens the Blog dropdown on focus and toggles it with the keyboard-activated trigger', () => {
    render(<Header />)
    const trigger = screen.getByRole('button', { name: 'Blog' })
    const wrapper = trigger.parentElement!
    const dropdown = screen.getByRole('link', { name: 'Elements' }).closest('ul')!

    fireEvent.focus(wrapper)
    expect(dropdown.className).toContain('block')

    fireEvent.click(trigger)
    expect(dropdown.className).toContain('hidden')
    fireEvent.click(trigger)
    expect(dropdown.className).toContain('block')
  })

  it('closes the Blog dropdown when a dropdown link is chosen', () => {
    render(<Header />)
    fireEvent.mouseEnter(screen.getByRole('button', { name: 'Blog' }).parentElement!)
    fireEvent.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(screen.getByRole('link', { name: 'Blog Details' }).closest('ul')!.className).toContain(
      'hidden',
    )
  })

  it('gains the soft shadow on scroll and keeps the dark background', () => {
    const { container, unmount } = render(<Header />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('bg-header')
    expect(header.className).toContain('shadow-none')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('shadow-[0_10px_15px_rgba(25,25,25,0.1)]')

    unmount()
  })

  it('toggles the mobile menu with aria-expanded and closes it on link click', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(mobileNav.className).toContain('hidden')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(mobileNav.className).toContain('flex')

    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(mobileNav.className).toContain('hidden')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(mobileNav.className).toContain('flex')
    fireEvent.click(toggle)
    expect(mobileNav.className).toContain('hidden')
  })

  it('closes the mobile menu when a desktop nav link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const main = screen.getByRole('navigation', { name: 'Main' })
    fireEvent.click(within(main).getByRole('link', { name: 'Home' }))
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Toggle menu' }))
    fireEvent.click(within(main).getByRole('link', { name: 'Contact' }))
    expect(screen.getByRole('button', { name: 'Toggle menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
