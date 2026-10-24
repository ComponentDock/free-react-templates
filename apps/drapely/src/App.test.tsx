import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes the seven sections in reference order', () => {
    const { container } = render(<App />)

    const ids = Array.from(container.querySelectorAll('section')).map((section) => section.id)
    expect(ids).toEqual(['home', 'collections', 'popular', 'most-rated', 'new-shoes'])
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders both hero headlines and one footer attribution', () => {
    render(<App />)

    const headlines = screen.getAllByRole('heading', { level: 1 }).map((h) => h.textContent)
    expect(headlines).toEqual(['Arrivals Sales', 'New Shoes'])
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
