import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuoteBand } from './QuoteBand'
import { QUOTE_BAND } from '../data'

describe('QuoteBand', () => {
  it('renders the centered quote with attribution', () => {
    render(<QuoteBand />)
    expect(screen.getByText(QUOTE_BAND.quote)).toBeInTheDocument()
    expect(screen.getByText(QUOTE_BAND.attribution)).toBeInTheDocument()
  })

  it('renders a row of brand logo placeholders', () => {
    render(<QuoteBand />)
    const logos = screen.getAllByLabelText(/Brand logo/)
    expect(logos).toHaveLength(QUOTE_BAND.logos.length)
  })
})
