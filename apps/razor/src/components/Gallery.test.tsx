import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the gallery heading and at least four images', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Photos of Our Events' })).toBeInTheDocument()
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(4)
  })
})
