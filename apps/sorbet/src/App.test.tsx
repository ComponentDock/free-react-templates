import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the catalog bands in reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main section[id]')).map(
      (section) => section.id,
    )

    expect(ids).toEqual([
      'home',
      'features',
      'basicElements',
      'buttons',
      'inputs',
      'checkRadios',
      'sliders',
      'progressbar',
      'navigations',
      'pills',
      'notifications',
      'typography',
      'images',
      'javascriptsComponents',
      'carousel',
      'examples',
      'signup',
      'cta',
    ])
    expect(
      screen.getByRole('heading', { level: 1, name: 'Bootstrap 4 UI Kit' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Sorbet — UI Kit Showcase')
  })
})
