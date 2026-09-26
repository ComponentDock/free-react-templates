import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Our Gallery Archive/i })).toBeInTheDocument()
  })

  it('renders all gallery images', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Political rally event')).toBeInTheDocument()
    expect(screen.getByAltText('Campaign meeting')).toBeInTheDocument()
    expect(screen.getByAltText('Community outreach')).toBeInTheDocument()
    expect(screen.getByAltText('Voter registration drive')).toBeInTheDocument()
    expect(screen.getByAltText('Party convention')).toBeInTheDocument()
  })
})
