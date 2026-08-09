import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the gallery heading and four photo tiles', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Beauty & Massage' })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(4)
    expect(screen.getAllByText('Beauty & Massage').length).toBeGreaterThan(1)
  })
})
