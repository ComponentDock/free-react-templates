import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Benefits of Professional Office Cleaning')).toBeInTheDocument()
    expect(screen.getByText('How to Maintain a Clean Kitchen')).toBeInTheDocument()
    expect(screen.getByText('Window Cleaning Tips for Homeowners')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Aug 10, 2026')).toBeInTheDocument()
    const admins = screen.getAllByText('Admin')
    expect(admins.length).toBeGreaterThanOrEqual(1)
  })
})
