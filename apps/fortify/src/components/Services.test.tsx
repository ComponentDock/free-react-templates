import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText('Our Offered Services')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Network Security')).toBeInTheDocument()
    expect(screen.getByText('Data Protection')).toBeInTheDocument()
    expect(screen.getByText('Cloud Security')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Advanced firewall/i)).toBeInTheDocument()
    expect(screen.getByText(/End-to-end encryption/i)).toBeInTheDocument()
    expect(screen.getByText(/Secure your cloud/i)).toBeInTheDocument()
  })

  it('renders images with correct alt text', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    expect(images[0]).toHaveAttribute('alt', 'Network Security')
    expect(images[1]).toHaveAttribute('alt', 'Data Protection')
    expect(images[2]).toHaveAttribute('alt', 'Cloud Security')
  })
})
