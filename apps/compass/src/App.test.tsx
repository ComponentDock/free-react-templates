import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Compass — Consulting Agency')
  })

  it('composes every section in the original order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const ids = Array.from(main.querySelectorAll('section'))
      .map((section) => section.id)
      .filter(Boolean)

    expect(ids).toEqual([
      'home',
      'about',
      'team',
      'services',
      'testimonials',
      'features',
      'blog',
      'contact',
    ])

    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('cta')).toBeInTheDocument()
    expect(screen.getByTestId('approach')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('links the footer credit to Component Dock', () => {
    render(<App />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
