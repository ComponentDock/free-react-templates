import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section with correct id', () => {
    render(<Services />)
    expect(document.querySelector('#service-section')).toBeInTheDocument()
  })

  it('renders the section title', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Services We Provide/i)
  })

  it('renders all 6 service cards with correct titles', () => {
    render(<Services />)
    const titles = [
      'Web Design',
      'Photography',
      'Web Development',
      'Online Marketing',
      'Digital Media',
      'Support',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders description text for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Beautiful, modern designs/)).toBeInTheDocument()
    expect(screen.getByText(/Professional photography/)).toBeInTheDocument()
    expect(screen.getByText(/Robust, scalable web applications/)).toBeInTheDocument()
    expect(screen.getByText(/Strategic digital marketing/)).toBeInTheDocument()
    expect(screen.getByText(/Compelling video and multimedia/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable, round-the-clock/)).toBeInTheDocument()
  })

  it('renders 6 icon circles', () => {
    render(<Services />)
    const circles = document.querySelectorAll('.bg-primary-500.rounded-full')
    expect(circles).toHaveLength(6)
    for (const circle of circles) {
      expect(circle).toHaveClass('w-16')
      expect(circle).toHaveClass('h-16')
    }
  })

  it('has white background', () => {
    render(<Services />)
    expect(document.querySelector('#service-section')).toHaveClass('bg-white')
  })

  it('accepts custom className', () => {
    render(<Services className="custom-services" />)
    expect(document.querySelector('#service-section')).toHaveClass('custom-services')
  })
})
