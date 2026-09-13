import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Lawn Services' })).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)

    expect(screen.getByText('Garden Care')).toBeInTheDocument()
    expect(screen.getByText('Lawn Mowing')).toBeInTheDocument()
    expect(screen.getByText('Lawn Treatment')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(screen.getByText(/Complete garden maintenance/)).toBeInTheDocument()
    expect(screen.getByText(/Regular mowing services/)).toBeInTheDocument()
    expect(screen.getByText(/Fertilization, aeration/)).toBeInTheDocument()
  })
})
