import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)
    expect(document.title).toBe('Dossier — Resume & Portfolio Template')

    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    expect(sections.map((s) => s.getAttribute('aria-label'))).toEqual([
      'Hero',
      'About',
      'My expertise',
      'Experience',
      'Quote',
      'Education',
      'Instagram feed',
    ])

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Visual Design & Art Director',
    )
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
