import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('link', { name: /^Quay$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Interior Design')
    expect(screen.getByRole('link', { name: 'Get In Touch' })).toBeInTheDocument()

    const headings = [...container.querySelectorAll('h1, h2')].map((h) => h.textContent)
    expect(headings).toEqual([
      'Interior Design',
      'Our Work',
      'What We Do',
      'About Us',
      'Features',
      'Subscribe to Newsletter',
      'Follow Us',
    ])

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
