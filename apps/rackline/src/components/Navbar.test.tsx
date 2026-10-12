import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the five destinations with Home current and both auth actions', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveClass('bg-slate')
    for (const label of ['Home', 'Domain', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Hosting/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-white')
    expect(screen.getByRole('link', { name: 'Domain' })).toHaveClass('text-white/60')
  })

  it('pairs an outlined Register with a filled lime Login', () => {
    render(<Navbar />)

    const register = screen.getByRole('link', { name: 'Register' })
    const login = screen.getByRole('link', { name: 'Login' })

    expect(register).toHaveClass('border-lime', 'bg-transparent', 'text-white', 'rounded-none')
    expect(login).toHaveClass('bg-lime', 'text-white', 'rounded-none')
    expect(register).toHaveAttribute('href', '#contact')
  })

  it('moves the current-page marker when another destination is chosen', async () => {
    render(<Navbar />)

    const blog = screen.getByRole('link', { name: 'Blog' })
    blog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(blog)

    expect(blog).toHaveAttribute('aria-current', 'page')
    expect(blog).toHaveClass('text-white')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
  })

  it('marks Hosting current when a dropdown row is chosen', async () => {
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Hosting/ })
    await userEvent.click(trigger)

    const shared = screen.getByRole('link', { name: 'Shared Hosting' })
    shared.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(shared)

    expect(trigger).toHaveClass('text-white')
  })

  it('opens the off-canvas panel from the hamburger and closes it again', async () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(toggle)
    expect(screen.getByRole('dialog', { name: 'Site menu' })).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await userEvent.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(toggle)
  })

  it('reflects a navigation made inside the off-canvas panel', async () => {
    render(<Navbar />)

    await userEvent.click(screen.getByRole('button', { name: 'Open the menu' }))
    const panel = within(screen.getByRole('dialog', { name: 'Site menu' }))
    const domain = panel.getByRole('link', { name: 'Domain' })
    domain.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(domain)

    expect(domain).toHaveAttribute('aria-current', 'page')
  })
})
