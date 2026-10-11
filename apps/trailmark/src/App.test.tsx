import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)
    expect(document.title).toBe('Trailmark — Travel Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(headings).toEqual([
      'Find the Adventure of a lifetime',
      'Top destinations in Europe',
      'A day on the island',
      'Popular destinations in 2018',
      'Special offers',
      'Subscribe to our Newsletter',
    ])
  })
})
