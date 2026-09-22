import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Gallery')
  })

  it('renders 5 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

  it('has correct alt text for each image', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Gallery image 1')).toBeInTheDocument()
    expect(screen.getByAltText('Gallery image 5')).toBeInTheDocument()
  })
})
