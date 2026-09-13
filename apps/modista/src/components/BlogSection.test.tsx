import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: /From The Blog/i })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<BlogSection />)
    expect(screen.getByText('Top 10 Summer Fashion Trends')).toBeInTheDocument()
    expect(screen.getByText('How to Style Your New Jacket')).toBeInTheDocument()
    expect(screen.getByText('Accessories That Complete Your Look')).toBeInTheDocument()
  })

  it('displays the fashion category tag', () => {
    render(<BlogSection />)
    const tags = screen.getAllByText('fashion')
    expect(tags.length).toBe(3)
  })

  it('renders excerpt text', () => {
    render(<BlogSection />)
    expect(screen.getByText(/Discover the hottest fashion trends/)).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<BlogSection />)
    expect(screen.getByText('21.09.2017')).toBeInTheDocument()
    expect(screen.getByText('18.09.2017')).toBeInTheDocument()
    expect(screen.getByText('15.09.2017')).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
