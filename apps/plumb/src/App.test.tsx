import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Plumb — Creative Agency Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Far far away, behind the word mountains/)

    expect(screen.getByText('Latest Product')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Web Resources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'On The News' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to get started?' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
