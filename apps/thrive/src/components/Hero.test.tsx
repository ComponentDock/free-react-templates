import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText('A big business starts small')).toBeInTheDocument()
  })

  it('renders the Get started button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the hero illustration', () => {
    render(<Hero />)
    const img = screen.getByAltText('Business illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has dark teal background', () => {
    const { container } = render(<Hero />)
    const section = container.firstElementChild as HTMLElement
    expect(section.className).toContain('bg-brand-teal')
  })
})
