import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Photo Gallery')).toBeInTheDocument()
  })

  it('renders the Gallery subheading', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders all 4 gallery images', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Hotel lobby')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel pool')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel restaurant')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel room')).toBeInTheDocument()
  })

  it('renders overlay text for each image', () => {
    render(<Gallery />)
    expect(screen.getByText('Hotel lobby')).toBeInTheDocument()
    expect(screen.getByText('Hotel pool')).toBeInTheDocument()
    expect(screen.getByText('Hotel restaurant')).toBeInTheDocument()
    expect(screen.getByText('Hotel room')).toBeInTheDocument()
  })
})
