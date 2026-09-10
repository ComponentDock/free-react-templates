import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogCards } from './BlogCards'

describe('BlogCards', () => {
  it('renders all three blog cards', () => {
    render(<BlogCards />)
    expect(screen.getByRole('heading', { name: 'Creative Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Digital Solutions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Growth Strategy' })).toBeInTheDocument()
  })

  it('renders descriptions for each card', () => {
    render(<BlogCards />)
    expect(screen.getByText(/Explore our latest creative work/)).toBeInTheDocument()
    expect(screen.getByText(/strategy to execution/)).toBeInTheDocument()
    expect(screen.getByText(/Data-driven approaches/)).toBeInTheDocument()
  })

  it('renders images for each card', () => {
    render(<BlogCards />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
