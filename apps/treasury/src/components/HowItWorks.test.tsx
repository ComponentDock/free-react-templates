import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01. Online Applications')).toBeInTheDocument()
    expect(screen.getByText('02. Get an Approval')).toBeInTheDocument()
    expect(screen.getByText('03. Card Delivery')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Fill out our simple/)).toBeInTheDocument()
    expect(screen.getByText(/Our team reviews/)).toBeInTheDocument()
    expect(screen.getByText(/Receive your new card/)).toBeInTheDocument()
  })
})
