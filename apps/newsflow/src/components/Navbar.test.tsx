import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Viral')).toBeInTheDocument()
    expect(screen.getByText('Story')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Top 10')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Funny')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText("Don't Miss")).toBeInTheDocument()
    expect(screen.getByText('Mega Menu')).toBeInTheDocument()
  })

  it('renders search button with aria-label', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('renders Add Post CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Add Post')).toBeInTheDocument()
  })

  it('marks Top 10 as active', () => {
    render(<Navbar />)
    const top10 = screen.getByText('Top 10')
    expect(top10.className).toContain('text-brand')
  })
})
