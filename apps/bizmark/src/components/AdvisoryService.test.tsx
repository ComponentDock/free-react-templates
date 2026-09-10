import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AdvisoryService } from './AdvisoryService'

describe('AdvisoryService', () => {
  it('renders adviser service headline', () => {
    render(<AdvisoryService />)
    expect(screen.getByRole('heading', { level: 2, name: /adviser service/i })).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<AdvisoryService />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<AdvisoryService />)
    expect(screen.getByAltText(/advisory service/i)).toBeInTheDocument()
  })
})
