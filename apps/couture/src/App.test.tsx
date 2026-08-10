import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders every section in order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { level: 2 })
    const labels = headings.map((heading) => heading.textContent)
    for (const expected of [
      'Trending',
      'Couture Online Fashion Shop',
      'Our Products',
      'Summer Sale',
      'Testimony',
      'Recent Blog',
      'We want you to express yourself',
      'Subscribe to our Newsletter',
    ]) {
      expect(labels).toContain(expected)
    }
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('10000+')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Couture — Fashion Shop Template')
  })
})
