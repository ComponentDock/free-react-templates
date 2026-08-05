import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, and footer with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Appson — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Perfect Landing Page' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Work the way you live' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Best Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Screenshots' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Download Appson' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Meet my team' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Latest Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact US' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
