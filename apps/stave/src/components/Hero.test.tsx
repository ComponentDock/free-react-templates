import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the Musician heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Musician')
  })

  it('has a background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Hero background' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has an overlay div', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-overlay')
    expect(overlay).toBeInTheDocument()
  })
})
