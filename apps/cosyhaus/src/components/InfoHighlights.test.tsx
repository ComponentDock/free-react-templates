import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoHighlights } from './InfoHighlights'

describe('InfoHighlights', () => {
  it('renders three highlight cards with unique titles', () => {
    render(<InfoHighlights />)
    expect(screen.getByText('Clean and Services')).toBeInTheDocument()
    expect(screen.getByText('Clean and Modern')).toBeInTheDocument()
    expect(screen.getByText('Elegant and Modern')).toBeInTheDocument()
  })
})
