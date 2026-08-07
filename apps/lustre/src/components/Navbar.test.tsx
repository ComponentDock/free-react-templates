import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, navigation links, and a dark-mode toggle', () => {
    render(<Navbar onBookAppointment={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Lustre hair' })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'About Us', 'Services', 'Articles', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Book an Appointment' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root and reflects the mode', async () => {
    const user = userEvent.setup()
    render(<Navbar onBookAppointment={vi.fn()} />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('darkens the header once the page is scrolled', () => {
    render(<Navbar onBookAppointment={vi.fn()} />)
    const header = screen.getByRole('banner')

    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-black/85')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar onBookAppointment={vi.fn()} />)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getByRole('link', { name: 'Services' })).toBeInTheDocument()

    await user.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('requests an appointment from the desktop and mobile buttons', async () => {
    const user = userEvent.setup()
    const onBookAppointment = vi.fn()
    render(<Navbar onBookAppointment={onBookAppointment} />)

    await user.click(screen.getByRole('button', { name: 'Book an Appointment' }))
    expect(onBookAppointment).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobile).getByRole('button', { name: 'Book an Appointment' }))
    expect(onBookAppointment).toHaveBeenCalledTimes(2)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
