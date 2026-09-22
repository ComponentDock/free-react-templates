import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the CarePath logo', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /carepath/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /department/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /doctors/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^blog$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the appointment button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)

    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('shows blog dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogLink = screen.getByRole('link', { name: /^blog$/i })
    await user.hover(blogLink)

    expect(screen.getByRole('link', { name: /blog details/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /element/i })).toBeInTheDocument()
  })

  it('hides blog dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const blogLink = screen.getByRole('link', { name: /^blog$/i })
    await user.hover(blogLink)
    expect(screen.getByRole('link', { name: /blog details/i })).toBeInTheDocument()

    await user.unhover(blogLink)
    expect(screen.queryByRole('link', { name: /blog details/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    // Get all Home links (desktop + mobile), click the last one (mobile)
    const homeLinks = screen.getAllByRole('link', { name: /^home$/i })
    const mobileHomeLink = homeLinks[homeLinks.length - 1]
    if (!mobileHomeLink) throw new Error('Mobile home link not found')
    await user.click(mobileHomeLink)

    // Menu should close
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when appointment link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggleButton)

    // Get all appointment links, click the last one (mobile)
    const appointmentLinks = screen.getAllByRole('link', { name: /make an appointment/i })
    const mobileAppointmentLink = appointmentLinks[appointmentLinks.length - 1]
    if (!mobileAppointmentLink) throw new Error('Mobile appointment link not found')
    await user.click(mobileAppointmentLink)

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
