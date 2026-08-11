import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Hostly branding', () => {
    render(<App />)

    expect(document.title).toBe('Hostly — Travel Booking Widget Template')
  })

  it('renders a full-viewport section on the light warm-taupe wash', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-brand\/33/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
  })

  it('centers the white booking card on the taupe wash', () => {
    const { container } = render(<App />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/max-w-\[912px\]/)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Make your reservation')
  })

  it('renders NO navbar, hero copy or footer (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })
})
