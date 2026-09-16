import { render, screen } from '@testing-library/react'
import { WorkGallery } from './WorkGallery'

describe('WorkGallery', () => {
  it('renders six project cards', () => {
    render(<WorkGallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders project titles', () => {
    render(<WorkGallery />)
    expect(screen.getByText('College Health Profession')).toBeInTheDocument()
    expect(screen.getByText('Summit Business Park')).toBeInTheDocument()
  })
})
