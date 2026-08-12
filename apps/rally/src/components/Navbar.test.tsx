import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, primary links, tickets CTA and search control', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rally' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    // Desktop + closed mobile navs render duplicate links in the DOM —
    // query both with { hidden: true }.
    for (const link of ['About', 'Speakers', 'Schedule', 'Venue', 'Pricing']) {
      const matches = screen.getAllByRole('link', { name: link, hidden: true })
      expect(matches).toHaveLength(2)
      expect(matches[0]).toHaveAttribute('href', `#${link.toLowerCase()}`)
    }
    expect(screen.getByRole('link', { name: 'Get Tickets', hidden: true })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', () => {
    render(<Navbar />)

    const pagesToggle = screen.getByRole('button', { name: 'Pages', hidden: true })
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    for (const page of ['Blog', 'Blog Details', 'Elements', 'Contact']) {
      expect(screen.getAllByRole('link', { name: page, hidden: true })).toHaveLength(2)
    }

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu and closes it when a link is chosen', () => {
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')

    // Desktop + mobile navs duplicate links — the mobile copy is last.
    const scheduleLinks = screen.getAllByRole('link', { name: 'Schedule' })
    fireEvent.click(scheduleLinks[scheduleLinks.length - 1]!)

    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    // A pages link (mobile copy only) closes the menu too.
    fireEvent.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(screen.getByRole('link', { name: 'Blog' }))
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches from a transparent bar to the purple gradient after scrolling', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('linear-gradient')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('linear-gradient')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header.className).not.toContain('linear-gradient')
  })
})
