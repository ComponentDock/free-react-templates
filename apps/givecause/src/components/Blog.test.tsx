import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest News')
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('How Your Donations Are Making a Difference')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Spotlight: Stories from the Field')).toBeInTheDocument()
    expect(screen.getByText('Annual Report: 2025 in Review')).toBeInTheDocument()
  })

  it('displays dates, authors, and comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('12 Mar 2026')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<Blog />)
    expect(screen.getByAltText('How Your Donations Are Making a Difference')).toBeInTheDocument()
  })
})
