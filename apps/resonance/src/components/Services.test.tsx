import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the section label and heading', () => {
    render(<Services />)

    expect(screen.getByText(services.pill)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: services.heading })).toBeInTheDocument()
  })

  it('renders a card with an icon, title, and description for every service', () => {
    render(<Services />)

    for (const service of services.items) {
      expect(screen.getAllByRole('heading', { name: service.title }).length).toBeGreaterThan(0)
      expect(screen.getAllByText(service.description).length).toBeGreaterThan(0)
    }

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })
})
