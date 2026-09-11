import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Projects/i })).toBeInTheDocument()
  })

  it('renders 4 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Marketing Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Mobile Application')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
