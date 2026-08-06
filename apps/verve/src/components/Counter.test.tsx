import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the achievements heading and three stats', () => {
    render(<Counter />)

    expect(screen.getByRole('heading', { level: 2, name: /Our achievements/i })).toBeInTheDocument()

    expect(screen.getByText(/Customers are satisfied/i)).toBeInTheDocument()
    expect(screen.getByText(/preset options/i)).toBeInTheDocument()
    expect(screen.getByText(/response time/i)).toBeInTheDocument()
  })
})
