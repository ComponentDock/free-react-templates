import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the kicker and heading', () => {
    render(<Services />)
    expect(screen.getByText(services.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: services.heading })).toBeInTheDocument()
  })

  it('renders the three service cards with title, blurb, and Learn More link', () => {
    render(<Services />)
    for (const service of services.items) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(services.items[0].blurb)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: services.learnMore })).toHaveLength(3)
  })
})
