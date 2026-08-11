import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Wingly branding', () => {
    render(<App />)

    expect(document.title).toBe('Wingly — Flight Booking Template')
  })

  it('renders a full-viewport section with the full-bleed photo background', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/wingly-9/1920/1080')
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-cover/)
    expect(section.className).toMatch(/bg-center/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
  })

  it('vertically centers the full-width dark booking card over the photo', () => {
    const { container } = render(<App />)

    const form = container.querySelector('form') as HTMLElement
    expect(form).not.toBeNull()

    const card = form.parentElement as HTMLElement
    expect(card.className).toMatch(/bg-card/)
    expect(card.className).not.toMatch(/max-w/)

    const wrapper = card.parentElement as HTMLElement
    expect(wrapper.className).toMatch(/max-w-\[1140px\]/)
  })

  it('renders NO navbar, headline or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
