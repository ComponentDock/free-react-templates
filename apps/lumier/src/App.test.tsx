import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getAllByText('Biography').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lumier — Photography Template')
  })

  it('toggles mobile menu when menu button is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const sidebar = screen.getByLabelText('Close menu').closest('aside')
    expect(sidebar?.className).toContain('translate-x-0')
  })

  it('closes mobile menu via overlay click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Toggle menu'))
    const sidebar = screen.getByLabelText('Close menu').closest('aside')
    expect(sidebar?.className).toContain('translate-x-0')
    const overlay = sidebar?.previousElementSibling as HTMLElement
    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    await user.click(overlay)
    expect(sidebar?.className).toContain('-translate-x-full')
  })

  it('updates active section on scroll', () => {
    render(<App />)
    const sections = [
      'section-home',
      'section-photos',
      'section-bio',
      'section-blog',
      'section-contact',
    ]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        Object.defineProperty(el, 'offsetTop', { value: 100, configurable: true })
      }
    })

    Object.defineProperty(window, 'scrollY', { value: 250, configurable: true })
    window.dispatchEvent(new Event('scroll'))

    const homeLink = screen.getAllByText('Home')[0]!
    expect(homeLink.className).toContain('text-brand')
  })

  it('cleans up scroll event listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<App />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('handles scroll when section elements do not exist', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null)
    render(<App />)
    Object.defineProperty(window, 'scrollY', { value: 250, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    // No error thrown
  })
})
