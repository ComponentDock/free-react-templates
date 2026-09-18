import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Investments } from './Investments'

describe('Investments', () => {
  it('renders the heading', () => {
    render(<Investments />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Currency Investments')
  })

  it('renders View Services and Contact Us buttons', () => {
    render(<Investments />)
    expect(screen.getByRole('button', { name: /View Services/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Investments />)
    expect(screen.getByText(/team of experts is ready/)).toBeInTheDocument()
  })
})
