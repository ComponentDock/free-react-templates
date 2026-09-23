import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Can Do for You/i })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Beard Trimming' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quality Gel Shave' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Effective Body Massage' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Stylish Hair Cutting' })).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Expert beard shaping/i)).toBeInTheDocument()
    expect(screen.getByText(/Smooth and comfortable/i)).toBeInTheDocument()
    expect(screen.getByText(/Relaxing full-body/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional haircuts/i)).toBeInTheDocument()
  })
})
