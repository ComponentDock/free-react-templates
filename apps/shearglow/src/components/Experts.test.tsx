import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experts } from './Experts'

describe('Experts', () => {
  it('renders the heading and description', () => {
    render(<Experts />)
    expect(screen.getByRole('heading', { name: /Our Experts/i })).toBeInTheDocument()
    expect(screen.getByText(/Meet the talented professionals/i)).toBeInTheDocument()
  })

  it('renders three expert cards', () => {
    render(<Experts />)
    expect(screen.getByRole('heading', { name: 'Anna Williams' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Michael Torres' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sarah Chen' })).toBeInTheDocument()
  })

  it('renders expert roles', () => {
    render(<Experts />)
    expect(screen.getByText('Senior Stylist')).toBeInTheDocument()
    expect(screen.getByText('Color Specialist')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('renders social link icons for each expert', () => {
    render(<Experts />)
    const socialLinks = screen.getAllByRole('link', {
      name: /Facebook|Twitter|Instagram|LinkedIn/i,
    })
    // 3 experts * 4 social icons = 12
    expect(socialLinks).toHaveLength(12)
  })

  it('renders the side thumbnail image', () => {
    render(<Experts />)
    expect(screen.getByRole('img', { name: 'ShearGlow salon' })).toBeInTheDocument()
  })

  it('renders certificate images', () => {
    render(<Experts />)
    const certs = screen.getAllByRole('img', { name: /Certificate/i })
    expect(certs).toHaveLength(3)
  })
})
