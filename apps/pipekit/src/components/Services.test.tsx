import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Do Best/i })).toBeInTheDocument()
  })

  it('renders the split layout heading and description', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /We Build Brands That Last/i })).toBeInTheDocument()
    expect(screen.getByText(/comprehensive suite of services/i)).toBeInTheDocument()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
  })

  it('renders the services image', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: 'Our service workspace' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
