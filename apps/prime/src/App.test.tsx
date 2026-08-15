import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

const sectionOrder = [
  'hero',
  'gradient-strip',
  'services',
  'counters',
  'portfolio',
  'pricing',
  'quote',
  'testimonials',
  'newsletter',
  'blog',
]

describe('App', () => {
  it('composes every section in the documented order inside a main landmark', () => {
    const { container } = render(<App />)
    const sections = Array.from(container.querySelectorAll('main [data-section]')).map((el) =>
      el.getAttribute('data-section'),
    )
    expect(sections).toEqual(sectionOrder)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
