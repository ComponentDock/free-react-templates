import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Sculpt — Fitness Template')
  })

  it('composes all sections in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = Array.from(main.querySelectorAll('h1, h2, h3')).map((node) => node.textContent)
    expect(headings.join(' | ')).toContain('This is a lifestyle there is no finish line')
    expect(headings.join(' | ')).toContain('Work hard stay humble')
    expect(headings.join(' | ')).toContain('Our Class Schedule')
    expect(headings.join(' | ')).toContain("Let's Shop")
    expect(headings.join(' | ')).toContain('What we offer')
    expect(headings.join(' | ')).toContain('Our Trainers')
    expect(headings.join(' | ')).toContain('What people says behind their success')
    expect(headings.join(' | ')).toContain('Our Classes')
    expect(headings.join(' | ')).toContain('Request')
    expect(headings.join(' | ')).toContain('Upcoming Events')
    expect(headings.join(' | ')).toContain('Recent Blog')
    expect(headings.join(' | ')).toContain('Our Gallery')
    expect(headings.join(' | ')).toContain('Subscribe Newsletter')
  })

  it('renders the footer and navbar landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
