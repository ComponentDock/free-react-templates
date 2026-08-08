import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the page with banner, main and contentinfo landmarks', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Coursely — Learning Template')
  })

  it('renders all section headings in order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)

    expect(headings).toEqual([
      'Browse by category',
      'Courses for every skill level',
      'The Best Platform to Learn New Skills',
      'Learn From the Best',
      'What Our Students Say',
      'Choose Your Learning Path',
      'Ready to Start Learning?',
    ])
  })
})
