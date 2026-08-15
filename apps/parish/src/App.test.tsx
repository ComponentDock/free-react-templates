import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes all sections in the correct order with landmarks', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    const sections = Array.from(container.querySelectorAll('[data-section]')).map((el) =>
      el.getAttribute('data-section'),
    )
    expect(sections).toEqual([
      'navbar',
      'hero',
      'ministries',
      'counter',
      'sermons',
      'instagram',
      'testimonials',
      'events',
      'blog',
      'footer',
    ])

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Loving God, Loving Others, Serving God With All Your Heart/,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Know About Our God Who Created This Universe' }),
    ).toBeInTheDocument()
  })
})
