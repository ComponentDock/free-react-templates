import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PartnerStrip } from './PartnerStrip'

describe('PartnerStrip', () => {
  it('renders six partner logos', () => {
    render(<PartnerStrip />)
    const images = screen.getAllByAltText(/^Partner brand \d+$/)
    expect(images).toHaveLength(6)
  })
})
