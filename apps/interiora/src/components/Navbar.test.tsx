import { act, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand and all desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: new RegExp(BRAND) })).toHaveAttribute('href', '#home')
    const header = screen.getByRole('banner')
    for (const link of NAV_LINKS) {
      expect(within(header).getByText(link.label)).toBeInTheDocument()
    }
  })

  it('renders the Free Quote CTA pill', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Free Quote' })).toHaveAttribute('href', '#contact')
  })

  it('opens the Projects dropdown on click and shows the submenu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const projectsButton = screen.getByRole('button', { name: /Projects/ })
    await user.click(projectsButton)
    expect(screen.getByRole('link', { name: 'Residential' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hospitality' })).toBeInTheDocument()
  })

  it('opens the dropdown on hover and closes when the mouse leaves', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const projectsButton = screen.getByRole('button', { name: /Projects/ })
    await user.hover(projectsButton)
    expect(screen.getByRole('link', { name: 'Residential' })).toBeInTheDocument()
    await user.unhover(projectsButton)
    expect(screen.queryByRole('link', { name: 'Residential' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Projects/ }))
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('link', { name: 'Commercial' })).not.toBeInTheDocument()
  })

  it('keeps the dropdown open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Projects/ }))
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
    await user.keyboard('{a}')
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
  })

  it('opens the mobile menu panel and lists the same links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(panel).getByText(link.label)).toBeInTheDocument()
    }
  })

  it('closes the mobile menu via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the brand link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('link', { name: new RegExp(BRAND) }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a submenu link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('link', { name: 'Residential' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('stays transparent while the page is near the top', () => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
    render(<Navbar />)
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('banner').className).toContain('bg-transparent')
    expect(screen.getByRole('banner').className).not.toContain('bg-white')
  })

  it('switches to a white sticky header with shadow after scrolling', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 120, writable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('banner').className).toContain('bg-white')
    expect(screen.getByRole('banner').className).toContain('shadow')
    await user.click(document.body)
  })
})
