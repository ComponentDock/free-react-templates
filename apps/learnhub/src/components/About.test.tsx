import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /learn skills that matter/i }),
    ).toBeInTheDocument()
  })

  it('renders about description', () => {
    render(<About />)
    expect(screen.getByText(/project-based curriculum/i)).toBeInTheDocument()
  })

  it('renders bullet points', () => {
    render(<About />)
    expect(screen.getByText(/hands-on projects/i)).toBeInTheDocument()
    expect(screen.getByText(/industry-recognized certificates/i)).toBeInTheDocument()
  })

  it('renders Read More link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText(/students engaged/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
