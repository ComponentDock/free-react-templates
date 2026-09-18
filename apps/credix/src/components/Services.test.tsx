import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our services' })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'All the loans' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Easy and fast answer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'No additional papers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Secure financial services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Good investments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Accumulation goals' })).toBeInTheDocument()
  })
})
