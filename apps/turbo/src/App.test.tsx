import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Turbo — Business Agency Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/welcome/i)

    expect(
      screen.getByRole('heading', { level: 2, name: /for the next great business/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our features/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our team/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /testimonials/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /pricing/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /frequently ask questions/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our blog/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /contact us/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
