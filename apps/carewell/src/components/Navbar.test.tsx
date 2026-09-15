import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Carewell')).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    for (const link of ['Home', 'Causes', 'Events', 'About', 'Blog', 'Contact']) {
      expect(within(nav).getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the Donate Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })

  it('toggle opens and closes mobile menu', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has correct brand link href', () => {
    render(<Navbar />)
    const brandEl = screen.getByText('Carewell')
    const brandLink = brandEl.closest('a')
    expect(brandLink).not.toBeNull()
    expect(brandLink).toHaveAttribute('href', '/')
  })

  it('has correct donate button href', () => {
    render(<Navbar />)
    const donateLinks = screen.getAllByText('Donate Now')
    const donateAnchor = donateLinks[0]!.closest('a')
    expect(donateAnchor).not.toBeNull()
    expect(donateAnchor).toHaveAttribute('href', '#donate')
  })

  it('closes mobile menu when Donate Now is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileDonate = screen.getAllByText('Donate Now')
    await user.click(mobileDonate[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
