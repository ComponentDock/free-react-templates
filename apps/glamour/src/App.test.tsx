import { render, screen } from '@testing-library/react'
import { App } from './App'
import { describe, expect, it } from 'vitest'

describe('App', () => {
  it('renders every section in the source order', () => {
    const { container } = render(<App />)

    const headings = Array.from(container.querySelectorAll('h1, h2')).map(
      (node) => node.textContent ?? '',
    )
    const order = [
      'Kate Henderson', // hero slide 1
      'Glamour A Model Agency',
      "Our Tops Model's",
      'Clients Says',
      'Our services',
      'Wanna be a Model?',
      'Recent Blog',
    ]
    const indexes = order.map((expected) => headings.findIndex((text) => text.includes(expected)))
    expect(indexes.every((index) => index >= 0)).toBe(true)
    expect(indexes).toEqual([...indexes].sort((a, b) => a - b))

    // Footer brand is an exact heading match (the About heading also
    // contains the word "Glamour").
    expect(screen.getByRole('heading', { level: 2, name: 'Glamour' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
