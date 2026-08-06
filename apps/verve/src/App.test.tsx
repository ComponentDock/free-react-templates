import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Verve — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/I love to/)

    expect(
      screen.getByRole('heading', { level: 2, name: /fully featured text services platform/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /revenue channel/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Recent Works/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /satisfied customer says/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Our achievements/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/i })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
