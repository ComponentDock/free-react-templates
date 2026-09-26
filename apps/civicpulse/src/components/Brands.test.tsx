import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all brand logos', () => {
    render(<Brands />)
    expect(screen.getByAltText('Brand Alpha')).toBeInTheDocument()
    expect(screen.getByAltText('Brand Beta')).toBeInTheDocument()
    expect(screen.getByAltText('Brand Gamma')).toBeInTheDocument()
    expect(screen.getByAltText('Brand Delta')).toBeInTheDocument()
    expect(screen.getByAltText('Brand Epsilon')).toBeInTheDocument()
  })
})
