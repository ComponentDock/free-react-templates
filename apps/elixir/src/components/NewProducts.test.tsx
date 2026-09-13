import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewProducts } from './NewProducts'

describe('NewProducts', () => {
  it('renders the section heading', () => {
    render(<NewProducts />)
    expect(screen.getByRole('heading', { name: /New Products/i })).toBeInTheDocument()
  })

  it('renders four product cards', () => {
    render(<NewProducts />)
    expect(screen.getByRole('heading', { name: 'Umcka Cold Care' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bioderma' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chanca Piedra' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cetyl Pure' })).toBeInTheDocument()
  })

  it('renders product images', () => {
    render(<NewProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})
