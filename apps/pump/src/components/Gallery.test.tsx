import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the Instagram gallery heading', () => {
    render(<Gallery />)

    expect(screen.getByRole('heading', { level: 2, name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the gallery tiles', () => {
    render(<Gallery />)

    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
