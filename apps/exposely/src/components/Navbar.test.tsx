import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Exposely')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /social/i })
    expect(within(nav).getAllByRole('link')).toHaveLength(5)
  })

  it('renders a hamburger menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('does not show the side menu initially', () => {
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: /side menu/i })).not.toBeInTheDocument()
  })

  it('opens the side menu when the hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const sideNav = screen.getByRole('navigation', { name: /side menu/i })
    expect(sideNav).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(within(sideNav).getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('closes the side menu when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /side menu/i })).toBeInTheDocument()

    const closeBtn = screen.getAllByRole('button', { name: /close menu/i })
    const xButton = closeBtn[closeBtn.length - 1]!
    await user.click(xButton)
    expect(screen.queryByRole('navigation', { name: /side menu/i })).not.toBeInTheDocument()
  })

  it('closes the side menu when the overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /side menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu overlay/i }))
    expect(screen.queryByRole('navigation', { name: /side menu/i })).not.toBeInTheDocument()
  })

  it('closes the side menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const sideNav = screen.getByRole('navigation', { name: /side menu/i })
    expect(sideNav).toBeInTheDocument()

    const link = within(sideNav).getByRole('link', { name: /home/i })
    link.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: /side menu/i })).not.toBeInTheDocument()
  })

  it('has a fixed header', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('fixed')
  })
})
