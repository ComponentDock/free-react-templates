import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'
import { services } from '../data'

describe('ServicesGrid', () => {
  it('renders the section heading', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { name: 'We serve for peoples' })).toBeInTheDocument()
  })

  it('renders a card for every service with icon, title and copy', () => {
    render(<ServicesGrid />)
    expect(screen.getAllByRole('listitem')).toHaveLength(services.length)
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getAllByText(service.copy).length).toBeGreaterThan(0)
    }
    // one icon per service (aria-hidden decorative svgs)
    expect(screen.getAllByLabelText(/service icon/i)).toHaveLength(services.length)
  })
})
