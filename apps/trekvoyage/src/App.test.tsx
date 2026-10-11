import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the page in the reference section order', () => {
    const { container } = render(<App />)

    const sections = [...container.querySelectorAll('header, main > *, footer')]
    expect(sections.map((section) => section.tagName.toLowerCase())).toEqual([
      'header',
      'section',
      'div',
      'section',
      'section',
      'section',
      'section',
      'section',
      'section',
      'footer',
    ])

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      'Travel to the most beautiful places in the world, like',
    )
    expect(screen.getByRole('form', { name: 'Search availability' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Destination' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Special offers & Discounts' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Trekvoyage in numbers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Plan your travel now and get in touch with us.',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
