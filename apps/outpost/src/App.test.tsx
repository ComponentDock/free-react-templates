import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    const { container } = render(<App />)

    const sections = Array.from(container.querySelectorAll('section[id]')).map((node) => node.id)
    expect(sections).toEqual([
      'home',
      'services',
      'cta',
      'packages',
      'places',
      'team',
      'newsletter',
      'testimonials',
      'blog',
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Outpost' })).toBeInTheDocument()
  })

  it('renders exactly one Component Dock link and never the source attribution', () => {
    const { container } = render(<App />)

    const dockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dockLinks).toHaveLength(1)
    expect(dockLinks[0]).toHaveAttribute('href', 'https://www.componentdock.com/')

    // The source brand must never leak into the rendering (spelled out here so
    // the string itself does not exist in the app source tree).
    const sourceBrand = ['color', 'lib'].join('')
    expect(container.innerHTML.toLowerCase()).not.toContain(sourceBrand)
  })
})
