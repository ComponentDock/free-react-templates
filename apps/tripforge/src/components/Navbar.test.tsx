import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, primary links, and the Add listing CTA over a transparent bar', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-scrolled', 'false')
    expect(header).toHaveClass('bg-transparent')
    expect(screen.getByText('tripforge')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Tour', 'Hotels', 'Blog', 'Contact']) {
      expect(within(nav).getByText(label)).toBeInTheDocument()
    }
    expect(within(nav).getByText('Home')).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByText('About')).not.toHaveAttribute('aria-current')
    expect(screen.getAllByText('Add listing')).toHaveLength(1)
  })

  it('switches to the solid dark bar once the page is scrolled', () => {
    render(<Navbar />)
    window.scrollY = 220
    fireEvent.scroll(window)
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-scrolled', 'true')
    expect(header).toHaveClass('bg-ink')

    window.scrollY = 0
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'false')
  })

  it('collapses the links behind a hamburger and closes the panel from a link', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('region', { name: 'Mobile navigation' })
    expect(within(panel).getByText('Hotels')).toBeInTheDocument()
    expect(within(panel).getByText('Add listing')).toBeInTheDocument()

    fireEvent.click(within(panel).getByText('Hotels'))
    expect(screen.queryByRole('region', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
