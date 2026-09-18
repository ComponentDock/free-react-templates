import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('renders the quote heading and quote text', () => {
    render(<Quote />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Quote of the day')
    expect(screen.getByText(/where two or three gather/i)).toBeInTheDocument()
    expect(screen.getByText(/Matthew 18:20/)).toBeInTheDocument()
  })
})
