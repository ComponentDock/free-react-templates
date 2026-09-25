import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
  })

  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/and this is my curriculo/i)).toBeInTheDocument()
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
