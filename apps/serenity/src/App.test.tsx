import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Serenity brand', () => {
    render(<App />)
    expect(document.title).toBe('Serenity — Spa & Beauty')
  })

  it('composes all sections inside the main landmark in the original order', () => {
    const { container } = render(<App />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    const sections = Array.from(container.querySelectorAll('main section'))
    expect(sections.map((section) => section.id)).toEqual([
      'home',
      'about',
      'services',
      'treatments',
      'therapies',
      'pricing',
      'testimony',
      'counter',
      'blog',
      'gallery',
    ])
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main',
    )
  })
})
