import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services we provide' })).toBeInTheDocument()
  })

  it('renders both service cards', () => {
    render(<Services />)
    expect(screen.getByText('Field Ready')).toBeInTheDocument()
    expect(screen.getByText('Transportation')).toBeInTheDocument()
  })

  it('renders service numbers', () => {
    render(<Services />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders Get the Service buttons', () => {
    render(<Services />)
    const buttons = screen.getAllByText('Get the Service')
    expect(buttons).toHaveLength(2)
  })

  it('renders service images', () => {
    render(<Services />)
    expect(screen.getByAltText('Field Ready')).toBeInTheDocument()
    expect(screen.getByAltText('Transportation')).toBeInTheDocument()
  })
})
