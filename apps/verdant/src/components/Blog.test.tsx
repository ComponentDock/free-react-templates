import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/latest news/i)).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/garden designers across the country/i)).toBeInTheDocument()
    expect(screen.getByText(/resilient plants for a lasting landscape/i)).toBeInTheDocument()
    expect(screen.getByText(/the summer coming up/i)).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText(/20 Jun 2018/)).toHaveLength(2)
    expect(screen.getByText(/alan jackson/i)).toBeInTheDocument()
    expect(screen.getByText(/mason jenkins/i)).toBeInTheDocument()
  })
})
