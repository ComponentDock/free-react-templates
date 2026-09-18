import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and all four project cards', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()

    for (const title of [
      'E-Commerce Platform',
      'Cloud Migration',
      'Security Audit',
      'SEO Campaign',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows project images with picsum URLs', () => {
    render(<Projects />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
