import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandStrip } from './BrandStrip'
import { BRAND_LOGOS } from '../data'

describe('BrandStrip', () => {
  it('renders all five partner logo marks', () => {
    render(<BrandStrip />)

    for (const logo of BRAND_LOGOS) {
      expect(screen.getByText(logo)).toBeInTheDocument()
    }
  })
})
