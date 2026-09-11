import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, it, expect } from 'vitest'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('How We Work')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const services = [
      'Office Cleaning',
      'Pool Cleaning',
      'Carpet Cleaning',
      'Kitchen Cleaning',
      'Garden Cleaning',
      'Window Cleaning',
    ]
    for (const s of services) {
      expect(screen.getByText(s)).toBeInTheDocument()
    }
  })

  it('renders Read more links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(6)
  })
})
