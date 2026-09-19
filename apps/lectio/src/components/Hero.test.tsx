import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Literature Course/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Donec id mattis est/i)).toBeInTheDocument()
  })

  it('renders author info with name in gold', () => {
    render(<Hero />)
    expect(screen.getByText(/Sebastian Smith/)).toBeInTheDocument()
    expect(screen.getByText(/Senior Lead Developer/)).toBeInTheDocument()
  })

  it('renders the See Details button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /See Details/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /Student studying/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the dark overlay', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
