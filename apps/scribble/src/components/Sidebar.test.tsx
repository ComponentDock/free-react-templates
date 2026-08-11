import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  footerCopyright,
  navItems,
  navLabel,
  searchLabel,
  searchPlaceholder,
  siteDescription,
  siteName,
} from '../data'

describe('Sidebar', () => {
  it('renders the search field, site info, nav, and footer attribution', () => {
    render(<Sidebar open={false} />)

    expect(screen.getByLabelText(searchLabel)).toHaveAttribute('placeholder', searchPlaceholder)
    expect(screen.getByRole('heading', { level: 1, name: siteName })).toBeInTheDocument()
    expect(screen.getByText(siteDescription)).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByText(footerCopyright)).toBeInTheDocument()
  })

  it('names the navigation landmark', () => {
    render(<Sidebar open={false} />)

    expect(screen.getByRole('navigation', { name: navLabel })).toBeInTheDocument()
  })

  it('slides off-canvas when closed and in when open', () => {
    const { container, rerender } = render(<Sidebar open={false} />)
    const panel = container.querySelector('.sidebar')

    expect(panel).toHaveClass('-translate-x-full')

    rerender(<Sidebar open />)

    expect(panel).toHaveClass('translate-x-0')
    expect(panel).not.toHaveClass('-translate-x-full')
  })
})
