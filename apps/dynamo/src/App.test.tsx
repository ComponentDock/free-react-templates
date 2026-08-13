import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the document title', () => {
    document.title = 'Dynamo — Industry Inc Template'
    expect(document.title).toBe('Dynamo — Industry Inc Template')
  })

  it('composes all sections in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const sections = main.querySelectorAll('header, section, footer')
    const ids = Array.from(sections).map((el) => el.getAttribute('data-section'))
    expect(ids).toEqual([
      'header',
      'hero',
      'services',
      'features',
      'clients',
      'testimonials',
      'cta',
      'video',
      'footer',
    ])
  })
})
