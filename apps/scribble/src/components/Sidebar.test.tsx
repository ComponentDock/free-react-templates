import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  footerCopyright,
  menuOpenLabel,
  navItems,
  navLabel,
  searchLabel,
  searchPlaceholder,
  siteDescription,
  siteName,
} from '../data'

describe('Sidebar', () => {
  it('renders the search field, site info, nav, footer, and rail toggle', () => {
    render(<Sidebar open={false} onToggle={() => {}} />)

    expect(screen.getByLabelText(searchLabel)).toHaveAttribute('placeholder', searchPlaceholder)
    expect(screen.getByRole('heading', { level: 1, name: siteName })).toBeInTheDocument()
    expect(screen.getByText(siteDescription)).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByText(footerCopyright)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })

  it('names the navigation landmark', () => {
    render(<Sidebar open={false} onToggle={() => {}} />)

    expect(screen.getByRole('navigation', { name: navLabel })).toBeInTheDocument()
  })

  it('keeps the rail visible when closed and slides the panel in when open', () => {
    const { container, rerender } = render(<Sidebar open={false} onToggle={() => {}} />)
    const shell = container.querySelector('.sidebar')

    // Closed: translated so only the rail (right 100px of the shell) shows.
    expect(shell?.className).toContain('-translate-x-[calc(100%_-_4rem)]')
    expect(shell?.className).toContain('md:-translate-x-[320px]')

    rerender(<Sidebar open onToggle={() => {}} />)

    expect(shell?.className).toContain('translate-x-0')
    expect(shell?.className).not.toContain('-translate-x-[calc(100%_-_4rem)]')
  })
})
