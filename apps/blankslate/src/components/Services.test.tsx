import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Strategy Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Digital Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '24/7 Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Security Solutions' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/data-driven strategies/i)).toBeInTheDocument()
    expect(screen.getByText(/targeted campaigns/i)).toBeInTheDocument()
    expect(screen.getByText(/round-the-clock support/i)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive security solutions/i)).toBeInTheDocument()
  })
})
