import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Comprehensive services for our patients')).toBeInTheDocument()
  })

  it('renders all five service items', () => {
    render(<Services />)
    expect(screen.getByText('Diagnostics')).toBeInTheDocument()
    expect(screen.getByText('Home Appointments')).toBeInTheDocument()
    expect(screen.getByText('Pharmacy')).toBeInTheDocument()
    expect(screen.getByText('Lab Research')).toBeInTheDocument()
    expect(screen.getByText('Medical Transport')).toBeInTheDocument()
  })

  it('has a View All Services button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /view all services/i })).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Services />)
    const section = document.getElementById('services')
    expect(section).toBeInTheDocument()
  })

  it('renders two service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    const serviceImages = images.filter(
      (img) =>
        img.getAttribute('alt')?.includes('Medical services') ||
        img.getAttribute('alt')?.includes('Healthcare facility'),
    )
    expect(serviceImages).toHaveLength(2)
  })
})
