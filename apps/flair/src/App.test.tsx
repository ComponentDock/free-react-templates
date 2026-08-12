import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the full page with the expected landmarks, sections and title', () => {
    render(<App />)
    expect(document.title).toBe('Flair — Creative Agency Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Top features' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Call to action' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Latest news' })).toBeInTheDocument()

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
