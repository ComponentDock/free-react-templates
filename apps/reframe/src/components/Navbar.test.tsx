import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Reframe')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Quotation')).toBeInTheDocument()
  })

  it('adds scrolled class on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white/95')
    expect(header.className).toContain('shadow-md')
  })

  it('shows mobile menu on toggle click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)

    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2)
    expect(toggle.querySelector('svg')).toBeTruthy()
  })

  it('shows dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const servicesBtn = screen.getByText('Services')
    await user.hover(servicesBtn)

    expect(screen.getByText('Pre-Construction')).toBeInTheDocument()
    expect(screen.getByText('General Construction')).toBeInTheDocument()
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
  })

  it('closes mobile menu when link clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)

    const homeLink = screen.getAllByText('Home')
    // Click the mobile link (last one)
    await user.click(homeLink.at(-1)!)

    // Mobile menu should be closed - no duplicate links
    expect(screen.getAllByText('Home')).toHaveLength(1)
  })

  it('toggles dropdown via aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const servicesBtn = screen.getByText('Services')
    const servicesDiv = servicesBtn.closest('div')!
    expect(servicesDiv.querySelector('button')).toHaveAttribute('aria-expanded', 'false')

    await user.hover(servicesBtn)
    expect(servicesDiv.querySelector('button')).toHaveAttribute('aria-expanded', 'true')
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const servicesBtn = screen.getByText('Services')
    const servicesDiv = servicesBtn.closest('div')!

    await user.hover(servicesBtn)
    expect(servicesDiv.querySelector('button')).toHaveAttribute('aria-expanded', 'true')

    await user.unhover(servicesBtn)
    expect(servicesDiv.querySelector('button')).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders with custom className', () => {
    render(<Navbar className="custom-class" />)
    expect(screen.getByTestId('navbar').className).toContain('custom-class')
  })
})
