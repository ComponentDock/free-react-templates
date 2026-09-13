import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders section heading', () => {
    render(<Reviews />)
    expect(screen.getByText('Some Feedback From Client')).toBeInTheDocument()
  })

  it('renders three testimonial cards', () => {
    render(<Reviews />)
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Reviews />)
    expect(screen.getByText(/Pexflow delivered our project/)).toBeInTheDocument()
    expect(screen.getByText(/Outstanding construction quality/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable, innovative/)).toBeInTheDocument()
  })

  it('renders client avatars', () => {
    render(<Reviews />)
    expect(screen.getAllByRole('img', { name: 'Michael Chen' })).toHaveLength(1)
    expect(screen.getAllByRole('img', { name: 'Sarah Williams' })).toHaveLength(1)
    expect(screen.getAllByRole('img', { name: 'James Rodriguez' })).toHaveLength(1)
  })
})
