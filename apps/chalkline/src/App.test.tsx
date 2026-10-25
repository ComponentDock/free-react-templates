import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the nine bands in the reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('main > section')).map(
      (section) => section.id,
    )
    expect(ids).toEqual([
      '',
      '',
      'roles',
      'gradebook',
      'standards',
      'migration',
      'pricing',
      'faq',
      'contact',
    ])
  })

  it('carries exactly one h1 and a skip link to the main landmark', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Chalkline — the learning platform your institution owns')
  })

  it('keeps the Component Dock credit in the footer', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
