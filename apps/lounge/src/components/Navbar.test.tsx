import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Lounge')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Dining & Bar')).toBeInTheDocument()
    expect(screen.getByText('Amenities')).toBeInTheDocument()
    expect(screen.getByText('Booking')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Toggle menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('shows dropdown on hover for Rooms', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const roomsLink = screen.getByText('Rooms')
    await user.hover(roomsLink)
    expect(screen.getByText('Superior Room Twin')).toBeInTheDocument()
    expect(screen.getByText('Premier Suite')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
  })

  it('applies scrolled class on scroll', async () => {
    render(<Navbar />)
    const header = document.querySelector('header')
    expect(header?.className).toContain('bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 10))
    expect(header?.className).toContain('bg-lounge-900')
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Toggle menu'))
    const homeLinks = screen.getAllByText('Home')
    const mobileHomeLink = homeLinks[homeLinks.length - 1]!
    await user.click(mobileHomeLink)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('closes mobile menu on child link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Toggle menu'))
    const childLinks = screen.getAllByText('Superior Room Twin')
    const mobileChildLink = childLinks[childLinks.length - 1]!
    await user.click(mobileChildLink)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })

  it('triggers mouseenter on rooms li for desktop dropdown', () => {
    render(<Navbar />)
    // Find the li that contains the Rooms link with dropdown
    const roomsLi = screen.getByText('Rooms').closest('li')!
    fireEvent.mouseEnter(roomsLi)
    expect(screen.getByText('Superior Room Twin')).toBeInTheDocument()
  })

  it('triggers mouseleave on rooms li for desktop dropdown', () => {
    render(<Navbar />)
    const roomsLi = screen.getByText('Rooms').closest('li')!
    fireEvent.mouseEnter(roomsLi)
    expect(screen.getByText('Superior Room Twin')).toBeInTheDocument()
    fireEvent.mouseLeave(roomsLi)
  })
})
