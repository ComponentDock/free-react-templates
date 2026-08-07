import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Chroma — Studio Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Hello folks, we are Chroma Studio/i)

    expect(screen.getByRole('heading', { level: 2, name: 'Who We Are' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What We Do' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Featured Works' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
