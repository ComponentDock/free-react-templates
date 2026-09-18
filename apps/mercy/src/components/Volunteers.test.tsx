import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section heading', () => {
    render(<Volunteers />)
    expect(screen.getByRole('heading', { name: /Meet Our Team/i })).toBeInTheDocument()
  })

  it('renders all four volunteer cards', () => {
    render(<Volunteers />)
    expect(screen.getByText('Jessica Watson')).toBeInTheDocument()
    expect(screen.getByText('Robert Garcia')).toBeInTheDocument()
    expect(screen.getByText('Lisa Anderson')).toBeInTheDocument()
    expect(screen.getByText('James Mitchell')).toBeInTheDocument()
  })

  it('renders social links for each volunteer', () => {
    render(<Volunteers />)
    expect(screen.getByRole('link', { name: /Jessica Watson on Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Jessica Watson on Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Jessica Watson on LinkedIn/i })).toBeInTheDocument()
  })
})
