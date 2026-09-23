import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders six service items', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Innovative Structure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Architectural Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Interior Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modern Window Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Expert Architects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sofa Design' })).toBeInTheDocument()
  })
})
