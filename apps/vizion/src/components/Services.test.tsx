import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Service Provided')).toBeInTheDocument()
    expect(screen.getByText(/Build brands campaigns/)).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Lorem ipsum dolor sit amet/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })

  it('has the services section id', () => {
    render(<Services />)
    const section = document.getElementById('services')
    expect(section).toBeInTheDocument()
  })
})
