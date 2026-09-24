import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EditorsChoice } from './EditorsChoice'

describe('EditorsChoice', () => {
  it('renders the section heading', () => {
    render(<EditorsChoice />)
    expect(screen.getByText(/Editor's Choice/)).toBeInTheDocument()
  })

  it('renders 4 article cards', () => {
    render(<EditorsChoice />)
    const articles = screen.getAllByText(/Gadgets/)
    expect(articles.length).toBeGreaterThanOrEqual(4)
  })

  it('renders article headlines', () => {
    render(<EditorsChoice />)
    expect(screen.getByText(/Myspace Layouts The Missing Element Already/)).toBeInTheDocument()
  })

  it('renders placeholder images with correct seeds', () => {
    render(<EditorsChoice />)
    const images = screen.getAllByRole('img')
    expect(images.some((img) => img.getAttribute('src')?.includes('scoop-choice1'))).toBe(true)
  })
})
