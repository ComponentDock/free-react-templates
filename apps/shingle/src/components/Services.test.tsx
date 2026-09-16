import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Best Services' })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Skylights',
      'Waterproofing',
      'Industrial Roofing',
      'Residential Roofing',
      'Gutter Cleaning',
      'Commercial Roofing',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('each card has a Get Started link', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: 'Get Started' })
    expect(links.length).toBe(6)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#appointment')
    }
  })
})
