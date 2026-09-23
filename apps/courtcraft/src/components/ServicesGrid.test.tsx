import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'
import { SERVICES } from '../data'

describe('ServicesGrid', () => {
  it('renders the section heading', () => {
    render(<ServicesGrid />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Legal Office' }),
    ).toBeInTheDocument()
  })

  it('renders all 6 service card titles', () => {
    render(<ServicesGrid />)

    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<ServicesGrid />)

    for (const service of SERVICES) {
      expect(screen.getByText(service.description)).toBeInTheDocument()
    }
  })

  it('renders the Learn More link', () => {
    render(<ServicesGrid />)

    const link = screen.getByRole('link', { name: 'Learn More' })
    expect(link).toHaveAttribute('href', '#services')
  })

  it('renders the View More button', () => {
    render(<ServicesGrid />)

    const link = screen.getByRole('link', { name: 'View More' })
    expect(link).toHaveAttribute('href', '#services')
  })
})
