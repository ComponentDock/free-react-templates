import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with correct title', () => {
    render(<App />)

    expect(document.title).toBe('LearnPath — Online Learning Template')

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    // Hero heading
    expect(
      screen.getByRole('heading', { level: 1, name: /best online learning system/i }),
    ).toBeInTheDocument()

    // Section headings
    expect(screen.getByRole('heading', { name: /Learn From Experts/i })).toBeInTheDocument()

    // Featured Courses appears twice (horizontal + grid)
    const featuredHeadings = screen.getAllByRole('heading', { name: 'Featured Courses' })
    expect(featuredHeadings.length).toBe(2)

    expect(screen.getByRole('heading', { name: /About LearnPath/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /What Students Say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest News & Events/i })).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
