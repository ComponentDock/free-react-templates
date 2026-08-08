import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section title and four gallery images', () => {
    render(<Projects />)
    expect(screen.getByText('CAREER OVERVIEW')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Projects/i })).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    for (const image of images) {
      expect(image).toHaveAttribute('alt')
    }
  })

  it('provides an accessible expand action per project', () => {
    render(<Projects />)
    expect(screen.getAllByRole('link', { name: /View project/i })).toHaveLength(4)
  })
})
