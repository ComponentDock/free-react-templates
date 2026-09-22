import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('renders the section heading', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /classes/i })).toBeInTheDocument()
  })

  it('renders all three class cards', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { name: /aerobics/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /pilates/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /yoga/i })).toBeInTheDocument()
  })

  it('renders instructor images', () => {
    render(<Classes />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
