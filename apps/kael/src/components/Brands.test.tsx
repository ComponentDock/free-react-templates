import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the experience counter', () => {
    render(<Brands />)
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Years Experience Working')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Brands />)
    expect(screen.getByText('(+1)-800-555-6789')).toBeInTheDocument()
  })

  it('renders brand logos', () => {
    render(<Brands />)
    expect(screen.getByAltText('Brand 1')).toBeInTheDocument()
    expect(screen.getByAltText('Brand 6')).toBeInTheDocument()
  })

  it('renders the call-to-action label', () => {
    render(<Brands />)
    expect(screen.getByText('Call us now')).toBeInTheDocument()
  })
})
