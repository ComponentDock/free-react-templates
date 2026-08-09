import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HairStyles } from './HairStyles'

describe('HairStyles', () => {
  it('renders the More Hair Styles heading', () => {
    render(<HairStyles />)
    expect(screen.getByRole('heading', { name: 'More Hair Styles' })).toBeInTheDocument()
  })

  it('renders three style cards with price tags', () => {
    render(<HairStyles />)
    for (const name of ['Beard Shaving', 'Crew Cut', 'Beard Trim']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('$50.00 only')).toHaveLength(3)
  })
})
