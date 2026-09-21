import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('renders 2 blog article cards', () => {
    render(<Blog />)
    expect(screen.getByText(/every single way you can wear pastel makeup/i)).toBeInTheDocument()
    expect(screen.getByText(/everything coming to netflix canada/i)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    expect(screen.getByText('Jeff Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Aaron Russell')).toBeInTheDocument()
  })
})
