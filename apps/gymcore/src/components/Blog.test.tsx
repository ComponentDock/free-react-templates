import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and blog cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /latest blog/i })).toBeInTheDocument()
    expect(screen.getByText('10 Tips for Building Strength at Home')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Guide for Muscle Recovery')).toBeInTheDocument()
    expect(screen.getByText('How to Stay Motivated on Your Fitness Journey')).toBeInTheDocument()
  })
})
