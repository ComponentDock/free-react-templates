import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectShowcase } from './ProjectShowcase'

describe('ProjectShowcase', () => {
  it('renders all 6 project items', () => {
    render(<ProjectShowcase />)
    expect(screen.getByText('Exotic Mangrove')).toBeInTheDocument()
    expect(screen.getByText('Urban Landscape')).toBeInTheDocument()
    expect(screen.getByText('Coastal Retreat')).toBeInTheDocument()
    expect(screen.getByText('Mountain Vista')).toBeInTheDocument()
    expect(screen.getByText('City Skyline')).toBeInTheDocument()
    expect(screen.getByText('Forest Path')).toBeInTheDocument()
  })

  it('renders View More links for each project', () => {
    render(<ProjectShowcase />)
    const viewMoreLinks = screen.getAllByText('View More')
    expect(viewMoreLinks).toHaveLength(6)
  })

  it('renders category tags', () => {
    render(<ProjectShowcase />)
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    expect(screen.getByText('People')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
  })
})
