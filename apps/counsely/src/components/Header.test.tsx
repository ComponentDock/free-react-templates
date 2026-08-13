import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { navLinks } from '../data'

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the brand with its law-firm tagline', () => {
    render(<Header />)
    const brand = screen.getByRole('link', { name: /COUNSELY/ })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveTextContent('COUNSELY')
    expect(brand).toHaveTextContent('A Law Firm Agency')
  })

  it('renders every section link and the CTA pill', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }
    const cta = screen.getByRole('link', { name: 'Free Consultation' })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the mobile menu via the hamburger switch', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'counsely-mobile-menu')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getAllByRole('link', { name: 'Home' }).at(-1)!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    await user.click(screen.getAllByRole('link', { name: 'Free Consultation' }).at(-1)!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('starts transparent and turns solid white once the page is scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(120)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })
})
