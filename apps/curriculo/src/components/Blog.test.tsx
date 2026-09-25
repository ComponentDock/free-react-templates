import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/blog on/i)).toBeInTheDocument()
    expect(screen.getByText(/medium/i)).toBeInTheDocument()
  })

  it('renders all blog entries', () => {
    render(<Blog />)
    expect(screen.getByText('Designing Accessible Interfaces at Scale')).toBeInTheDocument()
    expect(screen.getByText('The Future of Product Design in AI')).toBeInTheDocument()
    expect(screen.getByText('From Figma to Production: A Workflow Guide')).toBeInTheDocument()
  })

  it('renders dates and comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('Aug 15, 2032')).toBeInTheDocument()
    expect(screen.getByText('8 Comments')).toBeInTheDocument()
    expect(screen.getByText('Jul 28, 2032')).toBeInTheDocument()
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
    expect(screen.getByText('Jun 10, 2032')).toBeInTheDocument()
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
  })
})
