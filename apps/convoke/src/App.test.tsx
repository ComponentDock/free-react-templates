import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the reference order', () => {
    const { container } = render(<App />)
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const sections = Array.from(container.querySelectorAll('section')).map((s) =>
      s.getAttribute('aria-label'),
    )
    expect(sections).toEqual([
      'Conference hero',
      'Event details',
      'Welcome',
      'Speakers',
      'Event schedule',
      'Register',
      'Sponsors',
      'FAQ',
    ])
  })

  it('renders the header and footer landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Convoke — Conference Template')
  })
})
