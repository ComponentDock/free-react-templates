import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest From Our Blog/i })).toBeInTheDocument()
  })

  it('renders all four blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Core Web Vitals/)).toBeInTheDocument()
    expect(screen.getByText(/Content Strategy/)).toBeInTheDocument()
    expect(screen.getByText(/Technical SEO Checklist/)).toBeInTheDocument()
    expect(screen.getByText(/Link Building Strategies/)).toBeInTheDocument()
  })

  it('displays dates and engagement counts', () => {
    render(<Blog />)
    expect(screen.getByText('10 Jan 2025')).toBeInTheDocument()
    expect(screen.getByText('24')).toBeInTheDocument()
  })
})
