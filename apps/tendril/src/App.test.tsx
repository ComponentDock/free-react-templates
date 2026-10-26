import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { COMPONENT_DOCK_URL } from './data/site'

describe('App', () => {
  it('renders one header, one main and one section', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('carries exactly one h1 and no h2', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(0)
  })

  it('ships no form, input or image anywhere', () => {
    const { container } = render(<App />)

    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelector('input')).toBeNull()
    expect(container.querySelector('img')).toBeNull()
  })

  it('has exactly two ids: the panel and the headline', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('[id]')).map((node) => node.id)
    expect(ids.sort()).toEqual(['tendril-nav', 'tendril-title'])
  })

  it('closes with the Component Dock footer below the full-height shell', () => {
    const { container } = render(<App />)
    const root = container.querySelector('.td-root')
    const footer = screen.getByRole('contentinfo')

    expect(root?.nextElementSibling).toBe(footer)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })
})
