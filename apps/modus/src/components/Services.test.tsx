import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /What We Do/i })).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Space Planning')).toBeInTheDocument()
    expect(screen.getByText('Creative Styling')).toBeInTheDocument()
  })

  it('renders service images', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders service links', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', {
      name: /Interior Design|Space Planning|Creative Styling/i,
    })
    expect(links.length).toBe(3)
  })
})
