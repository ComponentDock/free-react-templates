import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections, and footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Blueprint — App Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Take on your biggest projects and goals',
      }),
    ).toBeInTheDocument()

    for (const title of ['Automatic Backup Data', 'Page Builder', 'Create your own template']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Collaborate with your design team in a new way',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Real template creation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Finish template creation' }),
    ).toBeInTheDocument()

    expect(screen.getByText('1500')).toBeInTheDocument()
    expect(screen.getByText('1200')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: 'News from our Blog' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Already trusted by over 10,000 users',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
