import { render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('renders logo "Astra"', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Astra' })).toHaveAttribute('href', '#home')
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const labels = ['Home', 'About', 'Services', 'Works', 'Contact']
    for (const label of labels) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('hamburger toggle opens and closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByRole('button', { name: 'Open menu' })
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleBtn)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('clicking a nav link in mobile menu closes it', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    // There are two "About" links - desktop and mobile. The mobile nav is the second one.
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(aboutLinks[1]!)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('scrolled state adds background class', async () => {
    vi.spyOn(window, 'scrollTo')
    render(<Navbar />)

    // Simulate scrolling past threshold
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))

    await waitFor(() => {
      const header = document.querySelector('header')!
      expect(header.className).toContain('bg-dark/95')
    })
  })
})
