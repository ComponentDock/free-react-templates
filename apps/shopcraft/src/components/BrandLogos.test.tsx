import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandLogos } from './BrandLogos'

describe('BrandLogos', () => {
  it('renders 5 brand logos', () => {
    render(<BrandLogos />)
    expect(screen.getAllByRole('link')).toHaveLength(5)
  })
})
