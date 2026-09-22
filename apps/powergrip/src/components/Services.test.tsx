import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services, servicesTitle, servicesSubtitle } from '../data'

describe('Services', () => {
  it('renders the heading and subtitle', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: servicesTitle })).toBeInTheDocument()
    expect(screen.getAllByText(servicesSubtitle).length).toBeGreaterThan(0)
  })

  it('renders all four service cards', () => {
    render(<Services />)
    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getAllByText(service.text).length).toBeGreaterThan(0)
    }
  })
})
