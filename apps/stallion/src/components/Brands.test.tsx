import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all brand logos', () => {
    render(<Brands />)
    expect(screen.getByText('Brand Alpha')).toBeInTheDocument()
    expect(screen.getByText('Brand Beta')).toBeInTheDocument()
    expect(screen.getByText('Brand Gamma')).toBeInTheDocument()
    expect(screen.getByText('Brand Delta')).toBeInTheDocument()
    expect(screen.getByText('Brand Epsilon')).toBeInTheDocument()
  })
})
