import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Mocha — Astro Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Crafted with Passion/)
    expect(heading.textContent).toMatch(/Passion & Precision/)

    const expectedH2s = [
      'Our Menu',
      'From Portland, With Love',
      'From Origin to Cup',
      'Take It Home',
      'What People Are Saying',
      'Join the Club',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
