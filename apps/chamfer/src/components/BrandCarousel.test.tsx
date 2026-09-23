import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandCarousel } from './BrandCarousel'

describe('BrandCarousel', () => {
  it('renders partner brand names', () => {
    render(<BrandCarousel />)
    expect(screen.getByText('Architect Digest')).toBeInTheDocument()
    expect(screen.getByText('Design Weekly')).toBeInTheDocument()
    expect(screen.getByText('Home & Living')).toBeInTheDocument()
    expect(screen.getByText('Interior Pro')).toBeInTheDocument()
    expect(screen.getByText('Studio Mag')).toBeInTheDocument()
  })
})
