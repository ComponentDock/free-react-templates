import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from '../components/Services'

describe('Services', () => {
  it('renders all three service titles', () => {
    render(<Services />)
    expect(screen.getByText('Refund Policy')).toBeInTheDocument()
    expect(screen.getByText('Premium Packaging')).toBeInTheDocument()
    expect(screen.getByText('Superior Quality')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Even the all-powerful Pointing/)).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word/)).toBeInTheDocument()
    expect(screen.getByText(/Blind texts are separated/)).toBeInTheDocument()
  })
})
