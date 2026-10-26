import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NAV_ID, NAV_LINKS } from '../data/site'
import { SiteHeader } from './SiteHeader'

describe('SiteHeader', () => {
  it('renders the wordmark and the four pill links', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'Tendril' })).toHaveAttribute(
      'href',
      '#tendril-title',
    )
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveAttribute('id', NAV_ID)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(NAV_LINKS.length + 1)

    NAV_LINKS.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    })
  })

  it('parks aria-current on the current page only', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'Help' })).not.toHaveAttribute('aria-current')
  })

  it('starts closed: the toggle reports false and points at the panel', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button', { name: 'Open menu' })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', NAV_ID)
    expect(screen.getAllByRole('navigation', { name: 'Main' })).toHaveLength(1)
  })

  it('opens on the toggle and closes on a second press', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(document.querySelector('.td-bar')?.className).toContain('is-open')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes when a link inside the panel is activated', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(screen.getByRole('link', { name: 'Stories' }))

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes on Escape and hands focus back to the toggle', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(document.activeElement).toBe(button)
  })

  it('closes on a press outside the bar but not on one inside it', () => {
    render(<SiteHeader />)
    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.mouseDown(screen.getByRole('link', { name: 'Features' }))
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseDown(document.body)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
