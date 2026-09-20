import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct title', () => {
    render(<App />)

    expect(document.title).toBe('Seminar — Conference 2024')

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Web Design Conference 2024/)

    expect(screen.getByRole('heading', { level: 2, name: 'Speakers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Programs' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Sponsors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'News' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
