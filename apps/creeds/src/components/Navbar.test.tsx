import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the cross wordmark, uppercase links and search control', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Creeds' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    // Desktop + closed mobile navs render duplicate links in the DOM —
    // query both with { hidden: true }.
    for (const link of ['Home', 'Ministries', 'Sermons', 'Event', 'Pages', 'Blog', 'Contact']) {
      const matches = screen.getAllByRole('link', { name: link, hidden: true })
      expect(matches.length).toBeGreaterThanOrEqual(2)
      expect(matches[0]).toHaveAttribute('href', `#${link.toLowerCase()}`)
    }
  })

  it('toggles the mobile menu and closes it when a link is chosen', () => {
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')

    // Desktop + mobile navs duplicate links — the mobile copy is last.
    const sermonsLinks = screen.getAllByRole('link', { name: 'Sermons' })
    fireEvent.click(sermonsLinks[sermonsLinks.length - 1]!)

    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
