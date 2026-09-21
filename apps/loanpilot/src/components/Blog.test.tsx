import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Latest Post/i })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('How To Choose The Right Loan For Your Needs')).toBeInTheDocument()
    expect(screen.getByText('Understanding Interest Rates And APR')).toBeInTheDocument()
    expect(screen.getByText('Tips For Improving Your Credit Score')).toBeInTheDocument()
  })

  it('renders excerpts for all posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Finding the perfect loan can be overwhelming/i)).toBeInTheDocument()
    expect(screen.getByText(/Interest rates and APR can significantly impact/i)).toBeInTheDocument()
    expect(screen.getByText(/A good credit score can open doors/i)).toBeInTheDocument()
  })

  it('renders author names and dates', () => {
    render(<Blog />)
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('Alex Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sep 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('Sep 12, 2024')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2024')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(
      screen.getByRole('img', { name: 'How To Choose The Right Loan For Your Needs' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Understanding Interest Rates And APR' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Tips For Improving Your Credit Score' }),
    ).toBeInTheDocument()
  })

  it('renders author photos', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: 'David Chen' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Maria Garcia' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Alex Johnson' })).toBeInTheDocument()
  })
})
