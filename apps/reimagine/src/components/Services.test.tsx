import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Offered Services' })).toBeInTheDocument()
  })

  it('renders all 8 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Brand Strategy')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument()
    expect(screen.getByText('SEO Marketing')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
    expect(screen.getByText('Content Creation')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
    expect(screen.getByText('Consulting')).toBeInTheDocument()
  })

  it('renders Get Started links in each card', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Get Started/i })
    expect(links).toHaveLength(8)
  })
})
