import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
  })

  it('renders 6 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })
})
