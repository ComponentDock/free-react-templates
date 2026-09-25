import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders all six service titles', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'eCommerce' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Applications' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Copywriting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mobile Applications' })).toBeInTheDocument()
  })

  it('renders Learn More links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(6)
  })
})
