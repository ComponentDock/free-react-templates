import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Coloring' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Haircut' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hairstyle' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Treatment' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Expert color techniques/i)).toBeInTheDocument()
    expect(screen.getByText(/Precision cuts tailored/i)).toBeInTheDocument()
  })
})
