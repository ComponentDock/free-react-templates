import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WorkGallery } from './WorkGallery'

describe('WorkGallery', () => {
  it('renders all portfolio items', () => {
    render(<WorkGallery />)
    expect(screen.getByRole('img', { name: 'Brand Film' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Music Video' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Commercial' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Documentary' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Event Highlight' })).toBeInTheDocument()
  })

  it('has the portfolio section with an ID', () => {
    render(<WorkGallery />)
    expect(document.getElementById('portfolio')).toBeInTheDocument()
  })

  it('has five gallery items', () => {
    const { container } = render(<WorkGallery />)
    const items = container.querySelectorAll('img')
    expect(items).toHaveLength(5)
  })
})
