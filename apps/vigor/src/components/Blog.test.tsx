import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Articles')).toBeDefined()
  })

  it('renders blog subheading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent From Blog')).toBeDefined()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Even the all-powerful/)).toBeDefined()
    expect(screen.getByText(/The Big Oxmox/)).toBeDefined()
    expect(screen.getByText(/Far far away behind/)).toBeDefined()
  })

  it('renders blog section id', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#blog')).toBeDefined()
  })
})
