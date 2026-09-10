import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders five partner logos', () => {
    render(<BrandLogos />)
    expect(screen.getByAltText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByAltText('GlobalTech')).toBeInTheDocument()
    expect(screen.getByAltText('Nexus')).toBeInTheDocument()
    expect(screen.getByAltText('Pioneer')).toBeInTheDocument()
    expect(screen.getByAltText('Horizon')).toBeInTheDocument()
  })
})
