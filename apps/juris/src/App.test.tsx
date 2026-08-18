import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Juris — Law Firm Template')
  })

  it('composes every section in order', () => {
    const { container } = render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Special Approach Dedicated Attorney/ }),
    ).toBeInTheDocument()
    const headings = screen.getAllByRole('heading', { level: 2 })
    const texts = headings.map((heading) => heading.textContent)
    for (const expected of [
      'Why You Need the Top Lawyers',
      'Our Practice Area',
      'What Client Says',
      'Recent News',
      'Why Choose Us?',
    ]) {
      expect(texts.some((text) => text?.startsWith(expected))).toBe(true)
    }
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
