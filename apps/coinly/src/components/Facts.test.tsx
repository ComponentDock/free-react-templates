import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'

describe('Facts', () => {
  it('shows the four stats with numbers and labels', () => {
    render(<Facts />)
    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('12K')).toBeInTheDocument()
    expect(screen.getByText('5B')).toBeInTheDocument()
    expect(screen.getByText('240')).toBeInTheDocument()
    expect(screen.getByText('Support Countries')).toBeInTheDocument()
    expect(screen.getByText('Transactions per hour')).toBeInTheDocument()
    expect(screen.getByText('Largest Transactions')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })
})
