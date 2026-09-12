import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Info } from './Info'

describe('Info', () => {
  it('renders the section subtitle and heading', () => {
    render(<Info />)
    expect(screen.getByText('take a look at our')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A simple trading system')
  })

  it('renders all three steps', () => {
    render(<Info />)
    expect(screen.getByText('Create your wallet')).toBeInTheDocument()
    expect(screen.getByText('Make payments')).toBeInTheDocument()
    expect(screen.getByText('Buy or sell orders')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<Info />)
    const descriptions = screen.getAllByText(/Sed ut iaculis elit/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
