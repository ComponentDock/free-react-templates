import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Featured Services' })).toBeInTheDocument()
  })

  it('renders the three icon service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Barber Razor' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Location Pin' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Barber Shave' })).toBeInTheDocument()
    expect(screen.getByText(/precision cuts/i)).toBeInTheDocument()
    expect(screen.getByText(/conveniently located/i)).toBeInTheDocument()
    expect(screen.getByText(/classic hot towel/i)).toBeInTheDocument()
  })
})
