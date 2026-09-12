import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest from Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('5 Study Habits That Top Students Swear By')).toBeInTheDocument()
    expect(screen.getByText('How to Transition Into Tech Without a CS Degree')).toBeInTheDocument()
    expect(screen.getByText('The Most In-Demand Tech Skills for 2025')).toBeInTheDocument()
  })

  it('renders blog categories', () => {
    render(<Blog />)
    expect(screen.getByText('Learning Tips')).toBeInTheDocument()
    expect(screen.getByText('Career Advice')).toBeInTheDocument()
    expect(screen.getByText('Industry News')).toBeInTheDocument()
  })

  it('renders engagement counts', () => {
    render(<Blog />)
    expect(screen.getByText(/12 Comments/)).toBeInTheDocument()
    expect(screen.getByText(/3.2k Likes/)).toBeInTheDocument()
  })
})
