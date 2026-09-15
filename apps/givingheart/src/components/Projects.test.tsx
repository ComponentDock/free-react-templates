import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Projects')
  })

  it('renders exactly 3 project cards', () => {
    render(<Projects />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
  })

  it('renders project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Clean Water Initiative')).toBeInTheDocument()
    expect(screen.getByText('Education for All')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Access')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders Donate Now links inside cards', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /donate now/i })
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it('renders read more links', () => {
    render(<Projects />)
    const links = screen.getAllByText('read more')
    expect(links).toHaveLength(3)
  })

  it('uses a grid layout', () => {
    render(<Projects />)
    const section = screen.getByRole('heading', { level: 2 }).closest('section')!
    const grid = section.querySelector('.grid')
    expect(grid).toBeInTheDocument()
  })
})
