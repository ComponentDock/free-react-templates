import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, all sections and the footer in order', () => {
    const { container } = render(<App />)
    expect(container.querySelector('[data-section="navbar"]')).not.toBeNull()
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    for (const section of ['hero', 'featured', 'choose-course', 'tutorials', 'reviews']) {
      expect(main.querySelector(`[data-section="${section}"]`)).not.toBeNull()
    }
    expect(container.querySelector('[data-section="footer"]')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the document landmarks and headline', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Hub Of Tutorials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Choose Course' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tutorials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Student Reviews' })).toBeInTheDocument()
  })
})
