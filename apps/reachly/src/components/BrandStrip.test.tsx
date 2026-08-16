import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandStrip } from './BrandStrip'
import { brandNames } from '../data'

describe('BrandStrip', () => {
  it('shows six logo placeholders in a row', () => {
    render(<BrandStrip />)

    for (const name of brandNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/./)).toHaveLength(brandNames.length)
  })
})
