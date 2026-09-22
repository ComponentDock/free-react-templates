import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Latest Blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Your daily meal plan')).toBeInTheDocument()
    expect(screen.getByText('Food is a great source of medicine')).toBeInTheDocument()
    expect(screen.getByText('Everyday diet plan')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders blog post descriptions', () => {
    render(<Blog />)
    const descriptions = screen.getAllByText(/praesent porttitor/i)
    expect(descriptions.length).toBe(3)
  })
})
