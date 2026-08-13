import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { brand, hero } from './data'

describe('App', () => {
  it('composes every section in order', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: brand })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: hero.headline })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular department' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Patient are saying' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Specialists' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Emergency hotline' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Recent medical news' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const dockLink = screen.getByRole('link', { name: /componentdock\.com/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
