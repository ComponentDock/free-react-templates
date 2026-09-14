import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 4 gallery items', () => {
    render(<Gallery />)
    expect(screen.getByText('Ocean View Suite')).toBeInTheDocument()
    expect(screen.getByText('Fine Dining Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Spa & Sauna')).toBeInTheDocument()
    expect(screen.getByText('Beach Activities')).toBeInTheDocument()
  })
})
