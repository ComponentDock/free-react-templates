import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the showcase bands in reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('section[id]')).map((section) => section.id)

    expect(ids).toEqual([
      'home',
      'buttons',
      'inputs',
      'checkRadios',
      'sliders',
      'progressbar',
      'paginations',
      'menus',
      'navigations',
      'navigationTabs',
      'notifications',
      'typography',
      'images',
      'javascriptsComponents',
      'carousel',
      'signup',
    ])
    expect(screen.getByRole('heading', { level: 1, name: 'Buildkit UI Kit.' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Buildkit — Component UI Kit Showcase')
  })
})
