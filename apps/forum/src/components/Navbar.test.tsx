import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText(/forum/)).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Schedule')).toBeInTheDocument()
    expect(screen.getByText('Buy Ticket')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // Click a link to close
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('closes mobile menu when Buy Ticket is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Open menu')
    await user.click(toggle)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // Click Buy Ticket in mobile menu
    const buyTicketLinks = screen.getAllByText('Buy Ticket')
    await user.click(buyTicketLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('applies scrolled class on scroll', () => {
    const { container } = render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
    fireEvent.scroll(window)
    const nav = container.querySelector('nav')
    expect(nav?.className).toContain('bg-[#04091e]')
    expect(nav?.className).toContain('shadow-md')
  })
})
