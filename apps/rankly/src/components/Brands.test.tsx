import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders five brand images', () => {
    render(<Brands />)
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 2')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 3')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 4')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 5')).toBeInTheDocument()
  })
})
