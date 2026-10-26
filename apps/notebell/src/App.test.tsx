import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('puts the column on a near-black ground under one violet glow', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main') as HTMLElement
    const className = main.getAttribute('class') ?? ''

    expect(className).toContain('bg-ground')
    expect(className).toContain('radial-gradient')
    expect(className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(className).toContain('px-4')
    expect(className).not.toContain('min-h-screen')
    expect(className).not.toContain('min-h-full')
  })

  it('is a heading outline one deep, with no nav or hero', () => {
    render(<App />)

    expect(screen.getAllByRole('heading')).toHaveLength(1)
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('ends on the Component Dock attribution line', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getAllByRole('link')).toHaveLength(1)
  })

  it('renders the four notifications in the reference order', () => {
    render(<App />)

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(4)
    expect(cards[0]).toHaveTextContent('Mara Kovač')
    expect(cards[3]).toHaveTextContent('INV-2093')
  })
})
