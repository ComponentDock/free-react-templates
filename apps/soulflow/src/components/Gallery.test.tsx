import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery section', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
  })

  it('renders 8 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('links open in new tab', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })
})
