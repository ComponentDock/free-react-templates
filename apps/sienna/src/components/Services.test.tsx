import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards with titles, copy, and Book Now links', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Stylish Hair Cut' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Cut & Hair Style' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Color & Hair Wash' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Book Now' })).toHaveLength(3)
  })
})
