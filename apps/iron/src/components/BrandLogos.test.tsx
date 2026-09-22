import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders 5 partner brand names', () => {
    render(<BrandLogos />)
    expect(screen.getByText('FitPro')).toBeInTheDocument()
    expect(screen.getByText('GymStar')).toBeInTheDocument()
    expect(screen.getByText('PowerLift')).toBeInTheDocument()
    expect(screen.getByText('FlexFit')).toBeInTheDocument()
    expect(screen.getByText('IronCore')).toBeInTheDocument()
  })
})
