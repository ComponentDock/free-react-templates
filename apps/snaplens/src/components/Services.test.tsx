import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('See What We Offer')
  })

  it('renders all 4 service titles', () => {
    render(<Services />)
    expect(screen.getByText('Video Footages')).toBeInTheDocument()
    expect(screen.getByText('Photo Shootings')).toBeInTheDocument()
    expect(screen.getByText('Photo Albums')).toBeInTheDocument()
    expect(screen.getByText('Original Ideas')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Services />)
    expect(screen.getByText('Amazing Studio')).toBeInTheDocument()
  })
})
