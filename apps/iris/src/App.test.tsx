import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Iris — Photography Template')
  })

  it('composes all sections in the reference order', () => {
    const { container } = render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    const sections = Array.from(container.querySelectorAll('section[id]')).map(
      (section) => section.id,
    )
    expect(sections).toEqual(['home', 'about', 'services', 'feedback', 'gallery'])
    expect(screen.getByRole('heading', { level: 1, name: /Nature Photoshoot/ })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services Offered by Us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
