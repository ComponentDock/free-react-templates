import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders the quote and the customer name', () => {
    render(<Testimony />)
    expect(screen.getByRole('heading', { name: /Testimony/ })).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toHaveTextContent(/small river named Duden/)
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
  })
})
