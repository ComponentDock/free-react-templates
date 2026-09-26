import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service items', () => {
    render(<Services />)
    const serviceNames = [
      'Web Design',
      'eCommerce',
      'Web Applications',
      'Branding',
      'Copy Writing',
      'Mobile Applications',
    ]
    serviceNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(6)
  })
})
