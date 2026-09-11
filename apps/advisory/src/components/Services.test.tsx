import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
      }),
    ).toHaveTextContent(/We bring ideas to life/)
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Media Planning')).toBeInTheDocument()
    expect(screen.getByText('Professional HR')).toBeInTheDocument()
  })

  it('renders service images with correct alt text', () => {
    render(<Services />)
    expect(screen.getByRole('img', { name: 'Business Consulting' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Media Planning' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Professional HR' })).toBeInTheDocument()
  })

  it('renders Make Appointment links for each service', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: 'Make Appointment' })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
