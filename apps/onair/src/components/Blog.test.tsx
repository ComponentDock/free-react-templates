import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Blog New heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Blog New/ })).toBeInTheDocument()
  })

  it('renders the Trending heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /Trending/ })).toBeInTheDocument()
  })

  it('renders the featured blog post title', () => {
    render(<Blog />)
    expect(screen.getByText(/light and music exposition hits Los Angeles/)).toBeInTheDocument()
  })

  it('renders small blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/Drug bust leads police/)).toBeInTheDocument()
    expect(screen.getByText(/Hear abuse victims/)).toBeInTheDocument()
  })

  it('renders trending post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/Major radio stations unite/)).toBeInTheDocument()
    expect(screen.getByText(/New album breaks streaming/)).toBeInTheDocument()
  })
})
