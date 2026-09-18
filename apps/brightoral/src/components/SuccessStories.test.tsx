import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessStories } from './SuccessStories'

describe('SuccessStories', () => {
  it('renders the heading', () => {
    render(<SuccessStories />)
    expect(screen.getByRole('heading', { name: /Success.*Stories/i })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<SuccessStories />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emma Williams')).toBeInTheDocument()
  })

  it('shows treatment types', () => {
    render(<SuccessStories />)
    expect(screen.getByText('Teeth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Dental Implants')).toBeInTheDocument()
    expect(screen.getByText('Orthodontics')).toBeInTheDocument()
  })
})
