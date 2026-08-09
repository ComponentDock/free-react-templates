import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and priced rows', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /plan & pricing/i })).toBeInTheDocument()
    for (const title of ["Men's Haircut", 'Children Haircut', 'Beard Cut', "Women's Haircut"]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$20.00')).toHaveLength(2)
    expect(screen.getByText('$29.00')).toBeInTheDocument()
    expect(screen.getByText('$49.91')).toBeInTheDocument()
  })
})
