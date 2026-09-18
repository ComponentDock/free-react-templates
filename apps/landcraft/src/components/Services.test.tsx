import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Special Services')).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Lawn Care')).toBeInTheDocument()
    expect(screen.getByText('Landscape Design')).toBeInTheDocument()
    expect(screen.getByText('Garden Maintenance')).toBeInTheDocument()
  })

  it('renders Read More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(3)
  })

  it('renders service images', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: 'Lawn Care' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Landscape Design' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Garden Maintenance' })).toBeInTheDocument()
  })
})
