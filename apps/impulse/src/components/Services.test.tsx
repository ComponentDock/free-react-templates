import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Email Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile Design')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
  })

  it('renders an h3 for each service', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })

  it('service descriptions are present', () => {
    render(<Services />)
    expect(screen.getByText(/compelling email campaigns/)).toBeInTheDocument()
    expect(screen.getByText(/stunning, responsive websites/)).toBeInTheDocument()
    expect(screen.getByText(/intuitive mobile experiences/)).toBeInTheDocument()
    expect(screen.getByText(/Deep user research/)).toBeInTheDocument()
  })

  it('renders the section with correct id', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const section = headings[0]?.closest('section')
    expect(section).not.toBeNull()
    expect(section!.getAttribute('id')).toBe('services')
  })
})
