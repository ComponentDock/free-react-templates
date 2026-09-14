import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Offers } from './Offers'

describe('Offers', () => {
  it('shows 3 service cards with headings', () => {
    render(<Offers />)
    expect(screen.getByRole('heading', { name: 'Tailor Sewing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Measurement' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ready-made' })).toBeInTheDocument()
  })
})
