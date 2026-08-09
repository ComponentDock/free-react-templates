import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'See the latest photos' })).toBeInTheDocument()
  })

  it('renders at least six photo tiles', () => {
    render(<Gallery />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByAltText('Serenity spa photo 1')).toBeInTheDocument()
  })
})
