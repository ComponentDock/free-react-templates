import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the reference sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      expect.stringContaining('Wherever you go'),
      'Popular Packages',
      'Our Recent Blogs',
      expect.stringContaining('Did not find your Package?'),
    ])

    expect(screen.getByRole('region', { name: 'Why book with us' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Contact details' })).toBeInTheDocument()
    expect(document.getElementById('booking')).not.toBeNull()
    expect(document.getElementById('package')).not.toBeNull()
    expect(document.getElementById('contact')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
