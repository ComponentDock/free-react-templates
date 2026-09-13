import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders trust headline and brand placeholders', () => {
    render(<BrandLogos />)
    expect(screen.getByText('Trusted by 12,000+ Happy Customers Worldwide')).toBeInTheDocument()
    expect(screen.getByText('Brand Alpha')).toBeInTheDocument()
    expect(screen.getByText('Brand Beta')).toBeInTheDocument()
    expect(screen.getByText('Brand Gamma')).toBeInTheDocument()
    expect(screen.getByText('Brand Delta')).toBeInTheDocument()
    expect(screen.getByText('Brand Epsilon')).toBeInTheDocument()
  })
})
