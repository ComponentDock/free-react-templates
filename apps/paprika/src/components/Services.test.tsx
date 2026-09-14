import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service items', () => {
    render(<Services />)
    expect(screen.getByText('Pizzas')).toBeInTheDocument()
    expect(screen.getByText('Coffee')).toBeInTheDocument()
    expect(screen.getByText('Burgers')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Hand-tossed dough/)).toBeInTheDocument()
    expect(screen.getByText(/Single-origin beans/)).toBeInTheDocument()
    expect(screen.getByText(/Angus beef patties/)).toBeInTheDocument()
    expect(screen.getByText(/Curated wine list/)).toBeInTheDocument()
  })
})
