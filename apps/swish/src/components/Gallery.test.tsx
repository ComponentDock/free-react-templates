import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders six gallery tiles with hover captions', () => {
    render(<Gallery />)

    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Player Showcase' })).toBeInTheDocument()
    expect(screen.getAllByText('Swords Club vs Uknights Club').length).toBe(6)
  })
})
