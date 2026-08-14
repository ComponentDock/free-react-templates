import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Steeple — Church & Religious')
  })

  it('composes all sections in the original order inside the main landmark', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    const names = sections.map((s) => s.getAttribute('aria-label'))
    expect(names).toEqual([
      'Welcome',
      'Latest sermon',
      'About our church',
      'Church features',
      'Recent events',
      'Quick contact',
    ])
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
