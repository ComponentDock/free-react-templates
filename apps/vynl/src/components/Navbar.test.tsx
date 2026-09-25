import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Vynl branding', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByText('Vynl')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('DJs')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows dropdown on Shows button hover', async () => {
    const user = userEvent.setup()
    render(<Navbar onToggleDark={vi.fn()} />)
    const showsBtn = screen.getByRole('button', { name: /shows/i })
    await user.hover(showsBtn)
    expect(screen.getByText('Top 20 of The Week')).toBeInTheDocument()
    expect(screen.getByText('Featured Artist')).toBeInTheDocument()
    expect(screen.getByText('Interviews')).toBeInTheDocument()
  })

  it('hides dropdown when mouse leaves Shows', async () => {
    const user = userEvent.setup()
    render(<Navbar onToggleDark={vi.fn()} />)
    const showsBtn = screen.getByRole('button', { name: /shows/i })
    await user.hover(showsBtn)
    expect(screen.getByText('Top 20 of The Week')).toBeInTheDocument()
    await user.unhover(showsBtn)
    // Move to body to trigger mouse leave
    await user.hover(document.body)
    expect(screen.queryByText('Top 20 of The Week')).not.toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar onToggleDark={vi.fn()} />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
    // Click a mobile link to close the menu
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    // After clicking a mobile link, the mobile menu closes (back to 1 Home link)
    const homeLinksAfter = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinksAfter).toHaveLength(1)
  })

  it('calls onToggleDark when dark mode button clicked', async () => {
    const onToggleDark = vi.fn()
    const user = userEvent.setup()
    render(<Navbar onToggleDark={onToggleDark} />)
    await user.click(screen.getByRole('button', { name: /toggle dark mode/i }))
    expect(onToggleDark).toHaveBeenCalledOnce()
  })
})
