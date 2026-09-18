import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectGallery } from './ProjectGallery'

describe('ProjectGallery', () => {
  it('renders the section heading', () => {
    render(<ProjectGallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Projects')
  })

  it('renders 6 project cards', () => {
    render(<ProjectGallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders project titles', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('White Sofas')).toBeInTheDocument()
    expect(screen.getByText('Gray Padded Chairs')).toBeInTheDocument()
    expect(screen.getByText('Brown Wooden')).toBeInTheDocument()
    expect(screen.getByText('Ceiling Chairs')).toBeInTheDocument()
    expect(screen.getByText('Water at Nighttime')).toBeInTheDocument()
    expect(screen.getByText('Modern Kitchen')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<ProjectGallery />)
    expect(screen.getByText('Exterior')).toBeInTheDocument()
    expect(screen.getByText('Living Room')).toBeInTheDocument()
    expect(screen.getByText('Bedroom')).toBeInTheDocument()
  })

  it('renders View Project links for each card', () => {
    render(<ProjectGallery />)
    const links = screen.getAllByText('View Project')
    expect(links).toHaveLength(6)
  })

  it('has the gallery section with correct id', () => {
    render(<ProjectGallery />)
    const section = document.getElementById('gallery')
    expect(section).toBeInTheDocument()
  })
})
