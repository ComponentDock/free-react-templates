import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders one shell with the bar, a single hero section and the footer', () => {
    const { container } = render(<App />)
    const shell = container.querySelector('.lk-shell')
    expect(shell).toHaveAttribute('id', 'top')
    expect(shell?.querySelector('header.lk-bar')).not.toBeNull()

    const sections = screen.getAllByRole('region')
    expect(sections).toHaveLength(1)

    const hero = sections[0]
    expect(hero).toHaveAttribute('id', 'stays')
    expect(hero).toHaveClass('lk-hero')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveAttribute('id', 'lk-title')
    expect(hero).toHaveAttribute('aria-labelledby', 'lk-title')

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('places the search form inside the hero section', () => {
    render(<App />)

    const hero = screen.getByRole('region')
    expect(hero.querySelector('form#lk-search')).not.toBeNull()
    expect(hero.querySelector('figure.lk-media')).not.toBeNull()
  })

  it('keeps the footer outside the 100vh shell', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.lk-shell')
    const footer = screen.getByRole('contentinfo')
    expect(shell?.contains(footer)).toBe(false)
  })
})
