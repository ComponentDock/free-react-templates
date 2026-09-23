import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Choose the Perfect Plan/i })).toBeInTheDocument()
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Standard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ultimate' })).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('£199')).toBeInTheDocument()
    expect(screen.getByText('£399')).toBeInTheDocument()
    expect(screen.getByText('£499')).toBeInTheDocument()
  })

  it('renders purchase buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Purchase Plan' })
    expect(buttons).toHaveLength(3)
  })
})
