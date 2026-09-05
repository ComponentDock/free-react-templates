import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })

  it('displays 3 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/I like the body/)).toBeInTheDocument()
    expect(screen.getByText(/MINIMAL & MODULAR/)).toBeInTheDocument()
    expect(screen.getByText(/Graphic Design and Editorial/)).toBeInTheDocument()
  })

  it('displays dates', () => {
    render(<Blog />)
    expect(screen.getByText('20 September 2017')).toBeInTheDocument()
    expect(screen.getByText('25 March 2017')).toBeInTheDocument()
    expect(screen.getByText('20 April 2017')).toBeInTheDocument()
  })
})
