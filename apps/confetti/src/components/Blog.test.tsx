import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('News From Blog')).toBeInTheDocument()
  })

  it('renders 2 blog cards', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read more/)
    expect(links.length).toBe(2)
  })
})
