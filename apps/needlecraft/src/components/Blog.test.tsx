import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section headings', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /news & tips/i })).toBeInTheDocument()
  })

  it('renders three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Benefits of Regular Acupuncture')).toBeInTheDocument()
    expect(screen.getByText('Herbal Remedies for Everyday Wellness')).toBeInTheDocument()
    expect(screen.getByText('Mindfulness and Body Balance')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Dr. Lin')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    const blogImages = images.filter((img) => img.getAttribute('src')?.includes('needlecraft-blog'))
    expect(blogImages.length).toBe(3)
  })
})
