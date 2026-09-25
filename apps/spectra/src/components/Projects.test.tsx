import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the Projects heading', () => {
    render(<Projects />)
    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('renders all 6 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Dashboard UI')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument()
    expect(screen.getByText('Social Media App')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
