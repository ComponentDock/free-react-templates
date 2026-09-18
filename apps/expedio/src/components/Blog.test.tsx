import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From our Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog post titles', () => {
    render(<Blog />)
    expect(
      screen.getByText('Forest responds to consultation smoking in al fresco.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Discover the hidden gems of Southeast Asia.')).toBeInTheDocument()
    expect(screen.getByText('Mountain trails: a beginner guide to hiking.')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Jan 03, 2024')).toBeInTheDocument()
    expect(screen.getByText('Jan 10, 2024')).toBeInTheDocument()
    expect(screen.getByText('Jan 18, 2024')).toBeInTheDocument()
  })

  it('renders comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
    expect(screen.getByText('2 Comments')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(
      screen.getByAltText('Forest responds to consultation smoking in al fresco.'),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Discover the hidden gems of Southeast Asia.')).toBeInTheDocument()
    expect(screen.getByAltText('Mountain trails: a beginner guide to hiking.')).toBeInTheDocument()
  })
})
