import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title to the Caritas branding', () => {
    render(<App />)

    expect(document.title).toBe('Caritas — Charity Template')
  })

  it('renders all sections in the source order (1:1 with ColorLib Amor)', () => {
    const { container } = render(<App />)

    const sections = container.querySelectorAll('main section')
    expect(sections).toHaveLength(8)
    expect(sections[0]?.getAttribute('id')).toBe('home')
    expect(sections[1]?.getAttribute('aria-label')).toBe('Services')
    expect(sections[2]?.getAttribute('id')).toBe('about')
    expect(sections[3]?.getAttribute('id')).toBe('causes')
    expect(sections[4]?.getAttribute('aria-label')).toBe('Volunteer call to action')
    expect(sections[5]?.getAttribute('id')).toBe('event')
    expect(sections[6]?.getAttribute('id')).toBe('blog')
    expect(sections[7]?.getAttribute('aria-label')).toBe('Clients')

    // Header nav above main, footer below it.
    expect(container.querySelector('header')).not.toBeNull()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
