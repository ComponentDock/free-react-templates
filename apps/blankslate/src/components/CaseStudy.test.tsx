import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudy } from './CaseStudy'

describe('CaseStudy', () => {
  it('renders the section heading', () => {
    render(<CaseStudy />)
    expect(screen.getByRole('heading', { name: /Case Study/i })).toBeInTheDocument()
  })

  it('displays all three case study cards', () => {
    render(<CaseStudy />)
    expect(screen.getByRole('heading', { name: 'E-commerce Growth' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Brand Revamp' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Startup Acceleration' })).toBeInTheDocument()
  })

  it('has Read More links', () => {
    render(<CaseStudy />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link.closest('a')).toHaveAttribute('href', '#work')
    }
  })
})
