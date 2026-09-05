import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Service We Do/i })).toBeInTheDocument()
  })

  it('displays 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Residential Design')).toBeInTheDocument()
    expect(screen.getByText('Corporate Design')).toBeInTheDocument()
    expect(screen.getByText('Commercial Design')).toBeInTheDocument()
  })

  it('has read more links', () => {
    render(<Services />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })
})
