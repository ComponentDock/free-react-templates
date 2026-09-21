import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders all five brand names', () => {
    render(<BrandLogos />)
    expect(screen.getByText('StrideX')).toBeInTheDocument()
    expect(screen.getByText('RunFit')).toBeInTheDocument()
    expect(screen.getByText('SoleCraft')).toBeInTheDocument()
    expect(screen.getByText('UrbanKicks')).toBeInTheDocument()
    expect(screen.getByText('ActiveEdge')).toBeInTheDocument()
  })
})
