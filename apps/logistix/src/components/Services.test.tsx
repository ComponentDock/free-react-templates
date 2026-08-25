import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service titles', () => {
    render(<Services />)
    expect(screen.getByText('Air Freight')).toBeInTheDocument()
    expect(screen.getByText('Ocean Freight')).toBeInTheDocument()
    expect(screen.getByText('Road Transport')).toBeInTheDocument()
    expect(screen.getByText('Warehousing')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Fast and reliable air cargo/)).toBeInTheDocument()
    expect(screen.getByText(/Cost-effective sea freight/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive road transport/)).toBeInTheDocument()
    expect(screen.getByText(/Strategic warehousing/)).toBeInTheDocument()
  })

  it('renders learn more links for each service', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: 'Learn more about Air Freight' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn more about Ocean Freight' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Learn more about Road Transport' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn more about Warehousing' })).toBeInTheDocument()
  })

  it('has the services section with id', () => {
    render(<Services />)
    expect(document.getElementById('services')).toBeInTheDocument()
  })
})
