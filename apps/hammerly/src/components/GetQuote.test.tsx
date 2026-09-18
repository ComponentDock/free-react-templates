import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GetQuote } from './GetQuote'

describe('GetQuote', () => {
  it('renders heading and button', () => {
    render(<GetQuote />)
    expect(screen.getByText('Looking for a quality constructor?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get a quote/i })).toBeInTheDocument()
  })
})
