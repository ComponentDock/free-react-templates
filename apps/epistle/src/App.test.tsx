import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { COMPONENT_DOCK_URL, EMAIL_ID, ERROR_ID, HEADLINE_ID, HINT_ID, NAV_ID } from './data/site'

describe('App', () => {
  it('renders one header, one main and one section', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('carries exactly one h1, no h2 and no image anywhere', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(0)
    expect(container.querySelector('img')).toBeNull()
  })

  it('ships one form with one email field and two buttons', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('form')).toHaveLength(1)
    expect(container.querySelectorAll('input')).toHaveLength(1)
    expect(container.querySelector('input')).toHaveAttribute('type', 'email')
    expect(screen.getAllByRole('button')).toHaveLength(2)
    // the two menu glyphs and the mail icon; the check joins them on success
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })

  it('carries exactly five ids: the panel, the headline, the field, the hint, the error', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('[id]')).map((node) => node.id)
    expect(ids.sort()).toEqual([EMAIL_ID, ERROR_ID, HEADLINE_ID, HINT_ID, NAV_ID].sort())
  })

  it('closes with the Component Dock footer below the full-height shell', () => {
    const { container } = render(<App />)
    const root = container.querySelector('.ep-root')
    const footer = screen.getByRole('contentinfo')

    expect(root?.nextElementSibling).toBe(footer)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })
})
