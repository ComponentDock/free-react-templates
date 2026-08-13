import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in order with the expected landmarks and title', () => {
    render(<App />)
    expect(document.title).toBe('Sana — Medical Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    const expected = [
      'Procedure Category',
      'Enjoy our Client\u2019s Feedback',
      'Our Offered Services',
      'Our Recent Blogs',
    ]
    for (const heading of expected) {
      expect(headings).toContain(heading)
    }
  })
})
