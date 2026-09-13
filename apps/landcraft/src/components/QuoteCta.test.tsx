import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import QuoteCta from './QuoteCta'

describe('QuoteCta', () => {
  it('renders the quote text', () => {
    render(<QuoteCta />)
    expect(screen.getByText(/Keep away from people/)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<QuoteCta />)
    expect(screen.getByText('Brayden Shar')).toBeInTheDocument()
  })
})
