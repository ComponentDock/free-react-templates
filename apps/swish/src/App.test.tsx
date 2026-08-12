import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Swish — Basketball School Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain('Dominate')
    expect(
      within(main).getByRole('heading', { name: 'Welcome to Basketball School' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Land Morning Blessed' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Learn About Basketball' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Meet the Players' })).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Latest Player Showcase' }),
    ).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Latest News & Update' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Follow Us Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
