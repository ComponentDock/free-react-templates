import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Digital Product Design in 2026')).toBeInTheDocument()
    expect(screen.getByText('10 UI Patterns That Actually Improve UX')).toBeInTheDocument()
    expect(screen.getByText("From Wireframe to Launch: A Designer's Workflow")).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<Blog />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Tips')).toBeInTheDocument()
    expect(screen.getByText('Strategy')).toBeInTheDocument()
  })

  it('renders date and author info', () => {
    render(<Blog />)
    expect(screen.getByText('12 March | by Alex')).toBeInTheDocument()
    expect(screen.getByText('28 February | by Alex')).toBeInTheDocument()
    expect(screen.getByText('15 February | by Alex')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('The Future of Digital Product Design in 2026')).toBeInTheDocument()
    expect(screen.getByAltText('10 UI Patterns That Actually Improve UX')).toBeInTheDocument()
    expect(
      screen.getByAltText("From Wireframe to Launch: A Designer's Workflow"),
    ).toBeInTheDocument()
  })
})
