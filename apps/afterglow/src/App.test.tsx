import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import { COMPONENT_DOCK_URL, HEADLINE, LOGO_TITLE, WORDMARKS } from './data/hero'

describe('App', () => {
  it('renders one bar, one nav, one main, two sections and one footer', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('nav')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(2)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
  })

  it('has exactly one h1, one h2, and no img, form or input', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('h2')).toHaveLength(1)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('form')).toHaveLength(0)
    expect(container.querySelectorAll('input')).toHaveLength(0)
    expect(container.querySelectorAll('button')).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(HEADLINE)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(LOGO_TITLE)
  })

  it('is a full-height, isolated root with the mesh behind the content', () => {
    const { container } = render(<App />)

    expect(container.querySelector('.ag-root')).not.toBeNull()
    expect(container.querySelectorAll('.ag-mesh .ag-blob')).toHaveLength(4)
    expect(container.querySelector('.ag-mesh')).toHaveAttribute('aria-hidden', 'true')
  })

  it('keeps the footer outside the one-screen root and links Component Dock', () => {
    const { container } = render(<App />)
    const root = container.querySelector('.ag-root')!

    expect(root.querySelector('footer')).toBeNull()
    expect(container.querySelector('footer a')).toHaveAttribute('href', COMPONENT_DOCK_URL)
  })

  it('shows the six wordmarks', () => {
    render(<App />)

    for (const wordmark of WORDMARKS) {
      expect(screen.getByText(wordmark.name)).toBeInTheDocument()
    }
  })
})
