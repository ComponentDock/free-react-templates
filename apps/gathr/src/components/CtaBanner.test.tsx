import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Get Your Tickets')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Don't miss the chance/)).toBeInTheDocument()
  })

  it('renders the Buy Now button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Buy Now')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<CtaBanner />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has a heading element', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
