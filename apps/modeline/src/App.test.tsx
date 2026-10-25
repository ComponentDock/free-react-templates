import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the eight bands in source order', () => {
    const { container } = render(<App />)

    const bands = Array.from(container.querySelectorAll('header, main > section, footer')).map(
      (band) => band.tagName + (band.getAttribute('id') === null ? '' : `#${band.getAttribute('id')}`),
    )

    expect(bands).toEqual([
      'HEADER',
      'SECTION#home',
      'SECTION',
      'SECTION#portfolio',
      'SECTION#about',
      'SECTION',
      'SECTION#shop',
      'SECTION#newsletter',
      'FOOTER#contact',
    ])
  })

  it('skips straight to the main landmark', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Fashionista')
  })
})
