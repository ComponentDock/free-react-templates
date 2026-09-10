import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Smart Saving Strategies for 2026')).toBeInTheDocument()
    expect(screen.getByText('Understanding Business Loans')).toBeInTheDocument()
    expect(screen.getByText('Digital Banking Trends')).toBeInTheDocument()
  })

  it('renders dates for each post', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 2, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()
  })
})
