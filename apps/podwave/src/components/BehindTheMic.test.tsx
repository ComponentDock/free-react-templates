import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BehindTheMic } from './BehindTheMic'

describe('BehindTheMic', () => {
  it('renders section heading', () => {
    render(<BehindTheMic />)
    expect(screen.getByRole('heading', { name: 'Behind The Mic' })).toBeInTheDocument()
  })

  it('renders 3 team members', () => {
    render(<BehindTheMic />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<BehindTheMic />)
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Audio Engineer')).toBeInTheDocument()
    expect(screen.getByText('Content Strategist')).toBeInTheDocument()
  })

  it('renders social media links for each member', () => {
    render(<BehindTheMic />)
    expect(screen.getByLabelText('Sarah Mitchell on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Sarah Mitchell on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Sarah Mitchell on LinkedIn')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<BehindTheMic />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
