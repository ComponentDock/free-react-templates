import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Curate')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('has correct href attributes on nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Portfolio')).toHaveAttribute('href', '#portfolio')
    expect(screen.getByText('Services')).toHaveAttribute('href', '#services')
    expect(screen.getByText('Testimonial')).toHaveAttribute('href', '#testimonial')
  })

  it('shows mobile toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile nav link — this calls setMobileOpen(false)
    const mobileLinks = screen.getAllByText('Home')
    // The mobile link is the second one (first is desktop)
    await user.click(mobileLinks[1]!)

    // Menu should close — toggle shows "Open menu" again
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
