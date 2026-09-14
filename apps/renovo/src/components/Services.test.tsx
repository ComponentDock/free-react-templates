import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('What we Offer to our Supporters')).toBeInTheDocument()
  })

  it('renders 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Computer Repair')).toBeInTheDocument()
    expect(screen.getByText('Mobile Repair')).toBeInTheDocument()
    expect(screen.getByText('Data Recovery')).toBeInTheDocument()
    expect(screen.getByText('Network Setup')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Expert diagnosis and repair/)).toBeInTheDocument()
    expect(screen.getByText(/Screen replacement, battery swap/)).toBeInTheDocument()
  })

  it('renders service images with alt text', () => {
    render(<Services />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(4)
  })
})
