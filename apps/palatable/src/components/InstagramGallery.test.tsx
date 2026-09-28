import { render, screen } from '@testing-library/react'
import { InstagramGallery } from './InstagramGallery'

describe('InstagramGallery', () => {
  it('renders heading', () => {
    render(<InstagramGallery />)
    expect(screen.getByText('Follow Us On Instagram')).toBeInTheDocument()
  })

  it('renders 6 Instagram images', () => {
    render(<InstagramGallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders alt text for each image', () => {
    render(<InstagramGallery />)
    expect(screen.getByAltText('Instagram photo 1')).toBeInTheDocument()
    expect(screen.getByAltText('Instagram photo 6')).toBeInTheDocument()
  })
})
