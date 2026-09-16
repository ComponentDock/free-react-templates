import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectSection } from './ProjectSection'

describe('ProjectSection', () => {
  it('renders the section heading', () => {
    render(<ProjectSection />)
    expect(screen.getByRole('heading', { name: 'Done Projects' })).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    render(<ProjectSection />)
    expect(screen.getByRole('heading', { name: 'Modern Building' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Office Complex' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Residential Tower' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Shopping Center' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bridge Project' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Warehouse Facility' })).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<ProjectSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
