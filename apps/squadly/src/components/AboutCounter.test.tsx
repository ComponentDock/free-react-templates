import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutCounter } from './AboutCounter'

describe('AboutCounter', () => {
  it('renders the welcome heading and description', () => {
    render(<AboutCounter />)

    expect(screen.getByText('Welcome to Squadly')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Welcome to Squadly A Rental/ })).toBeInTheDocument()
  })

  it('renders all four stats with labels', () => {
    render(<AboutCounter />)

    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('4,500')).toBeInTheDocument()
    expect(screen.getAllByText('300')).toHaveLength(2)

    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Customers Served')).toBeInTheDocument()
    expect(screen.getByText('Number of Equipment')).toBeInTheDocument()
    expect(screen.getByText('Number of Staff')).toBeInTheDocument()
  })
})
