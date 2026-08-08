import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections and footer in landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Congregate — Church Community Template')

    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    for (const heading of [
      'Everyone is welcome here.',
      'Service Times',
      "You're Invited",
      'Recent Messages',
      'Ways to Connect',
      'Real People. Real Hope.',
      "Your story isn't over.",
    ]) {
      const level1 = screen.queryAllByRole('heading', {
        level: 1,
        name: new RegExp(heading),
      })
      const level2 = screen.queryAllByRole('heading', {
        level: 2,
        name: new RegExp(heading),
      })
      expect(level1.length + level2.length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
