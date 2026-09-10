import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: /Our Categories/i })).toBeInTheDocument()
  })

  it('renders all three category items', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: 'Pizza' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bread' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Burgers' })).toBeInTheDocument()
  })

  it('renders category images with correct seeds', () => {
    render(<Categories />)
    const pizzaImg = screen.getByRole('img', { name: 'Pizza' })
    expect(pizzaImg).toHaveAttribute('src', expect.stringContaining('loaf-cat1'))
    const breadImg = screen.getByRole('img', { name: 'Bread' })
    expect(breadImg).toHaveAttribute('src', expect.stringContaining('loaf-cat2'))
    const burgersImg = screen.getByRole('img', { name: 'Burgers' })
    expect(burgersImg).toHaveAttribute('src', expect.stringContaining('loaf-cat3'))
  })

  it('renders the View Full Menu button', () => {
    render(<Categories />)
    expect(screen.getByRole('button', { name: 'View Full Menu' })).toBeInTheDocument()
  })

  it('has a surface background', () => {
    render(<Categories />)
    const section = screen.getByRole('heading', { name: /Our Categories/i }).closest('section')!
    expect(section).toHaveClass('bg-surface')
  })
})
