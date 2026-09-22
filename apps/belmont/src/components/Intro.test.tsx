import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the heading', () => {
    render(<Intro />)
    expect(screen.getByText(/Relax in our Hotel/i)).toBeInTheDocument()
  })

  it('renders the View Rooms link', () => {
    render(<Intro />)
    expect(screen.getByRole('link', { name: /view rooms/i })).toBeInTheDocument()
  })

  it('renders the Book Your Stay button', () => {
    render(<Intro />)
    expect(screen.getByRole('button', { name: /book your stay/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Intro />)
    expect(screen.getByText(/luxury resort/i)).toBeInTheDocument()
  })

  it('renders images on the right side', () => {
    const { container } = render(<Intro />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
