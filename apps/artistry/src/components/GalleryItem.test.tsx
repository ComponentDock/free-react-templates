import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GalleryItem } from './GalleryItem'

describe('GalleryItem', () => {
  it('displays the category tag', () => {
    render(<GalleryItem image="test.jpg" category="Mobile App" title="Test App" />)
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
  })

  it('displays the project title', () => {
    render(<GalleryItem image="test.jpg" category="Web Design" title="Test Project" />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders the image with correct alt text', () => {
    render(<GalleryItem image="test.jpg" category="Branding" title="Brand Project" />)
    const img = screen.getByRole('img', { name: 'Brand Project' })
    expect(img).toHaveAttribute('src', 'test.jpg')
  })
})
