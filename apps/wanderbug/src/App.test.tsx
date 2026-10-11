import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    const { container } = render(<App />)

    const sections = Array.from(container.querySelectorAll('section[id]')).map((node) => node.id)
    expect(sections).toEqual([
      'home',
      'events',
      'about',
      'testimonials',
      'faq',
      'video',
      'instagram',
    ])

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('few seconds away')
  })

  it('renders exactly one Component Dock link and never the source attribution', () => {
    const { container } = render(<App />)

    const dockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dockLinks).toHaveLength(1)
    expect(dockLinks[0]).toHaveAttribute('href', 'https://www.componentdock.com/')

    // Neither the source brand nor the source template name may leak into the
    // rendering (split so the strings do not exist in the app source tree).
    const html = container.innerHTML.toLowerCase()
    expect(html).not.toContain(['color', 'lib'].join(''))
    expect(html).not.toContain(['tra', 'live'].join(''))
  })
})
