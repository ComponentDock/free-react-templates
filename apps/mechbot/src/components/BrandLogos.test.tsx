import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders the section heading text', () => {
    render(<BrandLogos />)
    expect(screen.getByText('Trusted by leading organizations')).toBeInTheDocument()
  })

  it('renders all five brand logos', () => {
    render(<BrandLogos />)
    expect(screen.getByRole('img', { name: 'TechCorp logo' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'InnoLab logo' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'RoboEd logo' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'FutureWorks logo' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'AutomateIO logo' })).toBeInTheDocument()
  })
})
