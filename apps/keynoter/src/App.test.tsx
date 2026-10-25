import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('lands one h1, one main, one header, one footer', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(document.querySelectorAll('header')).toHaveLength(1)
    expect(document.querySelectorAll('footer')).toHaveLength(1)
  })

  it('runs the bands in the reference order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('main section')).map((band) => band.id)
    expect(ids).toEqual(['top', 'event', 'speakers', 'workshops', 'talks', 'subscribe'])
  })

  it('puts the skip link first and the header before main', () => {
    const { container } = render(<App />)
    const kids = Array.from(container.firstElementChild?.children ?? [])
    expect(kids[0]?.textContent).toBe('Skip to content')
    expect(kids[1]?.tagName).toBe('HEADER')
    expect(kids[2]?.tagName).toBe('MAIN')
    expect(kids[3]?.tagName).toBe('FOOTER')
  })

  it('offers the skip link before anything else', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })
})
