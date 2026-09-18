import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from '../components/Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText(/why choose us/i)).toBeInTheDocument()
    expect(screen.getByText(/mission is to bring/i)).toBeInTheDocument()
  })

  it('renders all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Perfect in Coverage')).toBeInTheDocument()
    expect(screen.getByText('Live Call Support')).toBeInTheDocument()
    expect(screen.getByText('Secured Payment')).toBeInTheDocument()
    expect(screen.getByText('1 Gbps Data Rate')).toBeInTheDocument()
  })

  it('renders View Packages button', () => {
    render(<Services />)
    expect(screen.getByText('View Packages')).toBeInTheDocument()
  })
})
