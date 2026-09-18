import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Start Investing')
  })

  it('renders Join Now button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('button', { name: /Join Now/i })).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Join thousands of investors/)).toBeInTheDocument()
  })
})
