import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Stayhaven — Hotel & Travel')
  })

  it('composes every section in the original order inside the main landmark', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const sectionIds = Array.from(main.querySelectorAll('section[id]')).map((section) => section.id)
    expect(sectionIds).toEqual([
      'home',
      'booking',
      'about',
      'team',
      'rooms',
      'menus',
      'events',
      'contact',
    ])

    // Full page landmark coverage: navbar, all headings, CTA and footer.
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Stay With Us & Relax' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Hey there!' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Leadership' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Rooms & Suites' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Photos' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Restaurant Menu' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'People Says' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'A Best Place To Stay. Reserve Now!' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(14)
  })
})
