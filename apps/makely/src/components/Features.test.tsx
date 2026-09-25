import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Our Features/i })).toBeInTheDocument()
  })

  it('renders all three feature headings', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Innovate' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Create' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Scale' })).toBeInTheDocument()
  })

  it('renders feature numbers', () => {
    render(<Features />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders all checklist items', () => {
    render(<Features />)
    expect(screen.getByText('Customer Experience')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
  })
})
