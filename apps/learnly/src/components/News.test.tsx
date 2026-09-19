import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders section headings', () => {
    render(<News />)
    expect(screen.getByText('News & Updates')).toBeInTheDocument()
    expect(screen.getByText('Campus Videos')).toBeInTheDocument()
  })

  it('renders Read All News link', () => {
    render(<News />)
    expect(screen.getByText('Read All News')).toBeInTheDocument()
  })

  it('renders View All Videos link', () => {
    render(<News />)
    expect(screen.getByText('View All Videos')).toBeInTheDocument()
  })

  it('renders the featured blog post', () => {
    render(<News />)
    expect(screen.getByText('Campus Camping and Learning Session')).toBeInTheDocument()
  })

  it('renders side blog posts', () => {
    render(<News />)
    expect(screen.getByText('New Library Wing Opens Next Semester')).toBeInTheDocument()
    expect(screen.getByText('Annual Science Fair Winners Announced')).toBeInTheDocument()
    expect(screen.getByText('Summer Internship Program Now Open')).toBeInTheDocument()
  })

  it('renders video thumbnails', () => {
    render(<News />)
    expect(screen.getByAltText('Campus video 1')).toBeInTheDocument()
    expect(screen.getByAltText('Campus video 2')).toBeInTheDocument()
  })
})
