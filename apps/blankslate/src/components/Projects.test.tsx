import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Recent Projects/i })).toBeInTheDocument()
  })

  it('displays all six project cards', () => {
    render(<Projects />)
    const projects = [
      'Brand Identity Design',
      'E-commerce Platform',
      'Marketing Campaign',
      'Mobile App Design',
      'SEO Optimization',
      'Web Application',
    ]
    for (const p of projects) {
      expect(screen.getByText(p)).toBeInTheDocument()
    }
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })
})
