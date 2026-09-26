import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders all 6 brand placeholders', () => {
    render(<Brands />)
    expect(screen.getByText('Brand One')).toBeInTheDocument()
    expect(screen.getByText('Brand Six')).toBeInTheDocument()
  })

  it('renders the experience number', () => {
    render(<Brands />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('renders the experience label', () => {
    render(<Brands />)
    expect(screen.getByText('Years Experience Working')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Brands />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })
})
