import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { servicesTitle, services } from '../data'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(servicesTitle)
  })

  it('renders all service cards', () => {
    render(<Services />)
    for (const service of services) {
      expect(screen.getByText(service.title)).toBeInTheDocument()
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
  })

  it('renders exactly 4 service cards', () => {
    render(<Services />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(services.length)
  })
})
