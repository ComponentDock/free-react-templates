import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, hero, showcase, CTA band, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Appdeck — App Landing Showcase')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Appdeck/)

    expect(screen.getByRole('heading', { level: 2, name: /3 home page/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /make your website/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
