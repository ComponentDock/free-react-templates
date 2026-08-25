import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Grow your business')).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Services />)
    expect(screen.getByText(/We provide comprehensive solutions/)).toBeInTheDocument()
  })

  it('renders the services image', () => {
    render(<Services />)
    const img = screen.getByAltText('Our services')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders Business Growth service', () => {
    render(<Services />)
    expect(screen.getByText('Business Growth')).toBeInTheDocument()
    expect(screen.getByText(/Strategic planning and execution/)).toBeInTheDocument()
  })

  it('renders Digital Marketing service', () => {
    render(<Services />)
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText(/Data-driven campaigns/)).toBeInTheDocument()
  })

  it('renders the Our services button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /our services/i })).toBeInTheDocument()
  })
})
