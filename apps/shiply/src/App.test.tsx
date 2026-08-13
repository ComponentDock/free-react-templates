import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders every section in the documented order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Worldwide Freight Services/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Best Prices' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'More Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Try Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More templates at Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
