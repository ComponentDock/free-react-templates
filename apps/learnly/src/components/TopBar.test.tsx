import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'
import { brand, topBar } from '../data'

describe('TopBar', () => {
  it('shows the brand wordmark with the tagline', () => {
    render(<TopBar />)

    expect(screen.getByText(brand.name)).toBeInTheDocument()
    expect(screen.getByText(brand.tagline)).toBeInTheDocument()
  })

  it('shows the opening hours and call blocks on desktop', () => {
    render(<TopBar />)

    expect(screen.getByText(topBar.hoursLabel)).toBeInTheDocument()
    expect(screen.getByText(topBar.hoursValue)).toBeInTheDocument()
    expect(screen.getByText(topBar.callLabel)).toBeInTheDocument()
    expect(screen.getByText(topBar.phoneDisplay)).toBeInTheDocument()
  })

  it('hides the hours, call and social blocks below the lg breakpoint but keeps the brand', () => {
    const { container } = render(<TopBar />)

    const brandLink = screen.getByRole('link', { name: new RegExp(brand.name) })
    expect(brandLink.className).not.toContain('hidden')

    const metaBlocks = container.querySelectorAll('[data-topbar-meta]')
    expect(metaBlocks.length).toBeGreaterThan(0)
    for (const block of metaBlocks) {
      expect(block.className).toContain('hidden')
      expect(block.className).toContain('lg:flex')
    }
  })

  it('renders four circular social links with accessible names', () => {
    render(<TopBar />)

    for (const social of topBar.socials) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(
      screen.getAllByRole('link', { name: /facebook|twitter|instagram|dribbble/ }),
    ).toHaveLength(topBar.socials.length)
  })
})
