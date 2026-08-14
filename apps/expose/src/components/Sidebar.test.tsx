import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'

/* The desktop sidebar carries `hidden md:flex`, so at the jsdom default
   viewport the base `hidden` (display:none) wins — query with
   hidden: true like the shared Navbar pattern. */
describe('Sidebar', () => {
  it('renders the logo, the five nav links and marks Home active in brand coral', () => {
    render(<Sidebar />)

    const brand = screen.getByRole('link', { name: 'Expose', hidden: true })
    expect(brand).toHaveAttribute('href', '#')
    expect(brand).toHaveClass('uppercase', 'font-bold')

    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label, hidden: true })).toBeInTheDocument()
    }

    const home = screen.getByRole('link', { name: 'Home', hidden: true })
    expect(home).toHaveClass('text-brand')
    expect(home).toHaveAttribute('aria-current', 'true')
    const photos = screen.getByRole('link', { name: 'Photos', hidden: true })
    expect(photos).not.toHaveClass('text-brand')
    expect(photos).not.toHaveAttribute('aria-current')
  })

  it('renders the five social icon links with accessible labels', () => {
    render(<Sidebar />)

    for (const { label } of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: label, hidden: true })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { hidden: true }).length).toBe(
      NAV_LINKS.length + SOCIAL_LINKS.length + 1,
    )
  })
})
