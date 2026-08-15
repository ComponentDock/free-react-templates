import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the heading and six icon cards with Learn More links', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: 'Services' })
    expect(section.className).toContain('bg-section')
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(services).toHaveLength(6)
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getAllByText(service.description).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: /Learn More/ })).toHaveLength(6)
    expect(section.querySelectorAll('svg')).toHaveLength(12)
  })
})
