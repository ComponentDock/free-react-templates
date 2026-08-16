import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page composition with all sections in order', () => {
    render(<App />)

    expect(document.title).toBe('Resonance — SEO & Digital Marketing Agency Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const headings = screen.getAllByRole('heading')
    expect(headings.map((h) => h.textContent)).toEqual([
      'Expert SEO, SEM Services in London',
      'Our Features',
      'Marketing Analysis',
      'Digital Marketing',
      'SEO and Backlinks',
      'Why our agency?',
      'Our Services',
      'Design Marketing',
      'Internet Marketing',
      'Social Marketing',
      'SEO Marketing',
      'BackLinks Marketing',
      'Design Marketing',
      'Testimonials',
      'Carl Anderson',
      'Drew Wood',
      'Michelle Alisson',
      'About Resonance',
      'Pages',
      'Resources',
      'Contact',
    ])
  })

  it('links the footer to Component Dock', () => {
    render(<App />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
