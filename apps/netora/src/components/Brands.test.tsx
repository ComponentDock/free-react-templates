import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'
import { brandLogos } from '../data'

describe('Brands', () => {
  it('renders the caption and the grayscale logo strip', () => {
    render(<Brands />)
    const section = screen.getByRole('region', { name: 'Brands' })
    expect(within(section).getByText('We work with global brands')).toBeInTheDocument()
    const logos = within(section).getAllByRole('listitem')
    expect(logos).toHaveLength(brandLogos.length)
    for (const name of brandLogos) {
      expect(within(section).getByText(name)).toBeInTheDocument()
    }
  })
})
