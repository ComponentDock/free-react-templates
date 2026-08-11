import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the logo and top-level links with Home active', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(within(nav).getByRole('link', { name: `${siteName} — home` })).toBeInTheDocument()
    for (const item of navItems) {
      expect(within(nav).getByText(item.label)).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('uses the brand red background', () => {
    const { container } = render(<Navbar />)
    expect(container.firstElementChild).toHaveClass('bg-brand')
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: navLabel })
    const pages = within(nav).getByRole('button', { name: 'Pages' })
    await user.click(pages)
    expect(within(nav).getByRole('link', { name: 'Archive List' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Typography' })).toBeInTheDocument()
    await user.click(pages)
    expect(within(nav).queryByRole('link', { name: 'Archive List' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with hamburger and close icons', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: mobileNavLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile Pages submenu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    const pages = within(mobile).getByRole('button', { name: 'Pages' })
    await user.click(pages)
    expect(within(mobile).getByRole('link', { name: 'Single Post' })).toBeInTheDocument()
    await user.click(pages)
    expect(within(mobile).queryByRole('link', { name: 'Single Post' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a top-level link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobile = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(within(mobile).getByRole('link', { name: 'Archives' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
