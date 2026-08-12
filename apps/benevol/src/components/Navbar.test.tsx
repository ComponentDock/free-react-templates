import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1))

afterEach(() => {
  vi.restoreAllMocks()
})

function renderWithSections(scrollY = 0) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true })
  return render(
    <div>
      {SECTION_IDS.map((id) => (
        <div key={id} id={id} />
      ))}
      <Navbar />
    </div>,
  )
}

describe('Navbar', () => {
  it('renders the uppercase wordmark and all six anchor links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: BRAND })).toHaveAttribute('href', '#home-section')
    for (const link of NAV_LINKS) {
      const anchor = screen.getByRole('link', { name: link.label })
      expect(anchor).toHaveAttribute('href', link.href)
    }
  })

  it('highlights the first section as active by default', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('marks the section under the scroll threshold as active', () => {
    renderWithSections(200)
    fireEvent.scroll(window)
    // jsdom reports offsetTop 0 for every section, so the last one wins.
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
  })

  it('keeps the first link active when no section passes the threshold', () => {
    // A negative scroll offset makes the threshold unreachable.
    renderWithSections(-1000)
    fireEvent.scroll(window)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
  })

  it('toggles the mobile menu with aria-expanded', () => {
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu via the close button', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close navigation menu' }))
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile menu when the wordmark or a desktop link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    fireEvent.click(screen.getAllByRole('link', { name: BRAND })[0]!)
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', {
        name: 'About',
      }),
    )
    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
