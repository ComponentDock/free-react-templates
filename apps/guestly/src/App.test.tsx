import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Guestly branding', () => {
    render(<App />)

    expect(document.title).toBe('Guestly — Room Reservation Widget Template')
  })

  it('renders a full-viewport section on the white page background', () => {
    const { container } = render(<App />)

    const section = container.querySelector('section#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(section.className).toMatch(/min-h-screen/)
    expect(section.className).toMatch(/bg-white/)
    expect(section.className).toMatch(/items-center/)
    expect(section.className).toMatch(/justify-center/)
  })

  it('centers the near-black booking card on the white background', () => {
    const { container } = render(<App />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-panel/)
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Reserve your Room')
  })

  it('renders NO navbar and NO hero copy (single-section form demo)', () => {
    const { container } = render(<App />)

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelector('main')).not.toBeNull()
  })

  it('links Component Dock from the footer', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const link = within(footer).getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(footer).toHaveTextContent('More templates at Component Dock')
  })
})
