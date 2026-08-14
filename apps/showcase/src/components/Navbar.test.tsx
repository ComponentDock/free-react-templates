import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { computeActiveSection, Navbar } from './Navbar'

describe('computeActiveSection', () => {
  it('returns "home" when no section has crossed the offset line', () => {
    expect(
      computeActiveSection([
        ['about-section', 400],
        ['resume-section', 900],
      ]),
    ).toBe('home')
  })

  it('returns the last section whose top crossed the offset line', () => {
    expect(
      computeActiveSection([
        ['about-section', 80],
        ['resume-section', 300],
        ['services-section', 600],
      ]),
    ).toBe('about-section')
    expect(
      computeActiveSection([
        ['about-section', -200],
        ['resume-section', 40],
        ['services-section', 250],
      ]),
    ).toBe('resume-section')
  })

  it('honors a custom offset', () => {
    expect(
      computeActiveSection(
        [
          ['about-section', 150],
          ['resume-section', 400],
        ],
        200,
      ),
    ).toBe('about-section')
  })
})

describe('Navbar', () => {
  it('shows the brand, all seven links, and the mobile toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Showcase home' })).toBeInTheDocument()
    expect(screen.getByText('Showcase')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2) // desktop + mobile
    for (const label of ['About', 'Resume', 'Services', 'Projects', 'My Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('button', { name: 'Toggle mobile menu' })).toBeInTheDocument()
  })

  it('toggles the mobile menu and reflects aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link inside it is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Desktop links render first; the mobile panel is the second copy.
    const mobileAbout = screen.getAllByRole('link', { name: 'About' })[1]!
    // Neutralize jsdom hash navigation so the React onClick still fires.
    mobileAbout.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileAbout)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('gains a white blurred background once the page scrolls past 50px', () => {
    render(<Navbar />)
    const header = document.querySelector('header')
    expect(header).not.toHaveClass('bg-white/95')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-white/95')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).not.toHaveClass('bg-white/95')
  })

  it('marks the link of the section currently in view as active', () => {
    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      const el = document.createElement('section')
      el.id = id
      return el
    })
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (
      this: HTMLElement,
    ) {
      const tops: Record<string, number> = {
        'about-section': 40,
        'resume-section': 300,
        'services-section': 600,
        'projects-section': 900,
        'blog-section': 1200,
        'contact-section': 1500,
      }
      return {
        top: tops[this.id] ?? 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0,
        width: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }
    })
    render(<Navbar />)
    // About is the only section above the 120px line → its desktop link is active.
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks[0]).toHaveClass('text-brand')
    vi.restoreAllMocks()
  })
})
