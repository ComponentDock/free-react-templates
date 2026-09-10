import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section with correct id', () => {
    render(<About />)
    expect(document.querySelector('#about-us')).toBeInTheDocument()
  })

  it('renders the section title', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/About Our BizPlanner/i)
  })

  it('renders the intro paragraph', () => {
    render(<About />)
    expect(screen.getByText(/dedicated team of professionals/)).toBeInTheDocument()
  })

  it('renders all 4 feature cards with correct titles', () => {
    render(<About />)
    const titles = ['Web Development', 'Photography', 'Digital Media', 'Online Marketing']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders description text for each feature card', () => {
    render(<About />)
    expect(screen.getByText(/modern, responsive web applications/i)).toBeInTheDocument()
    expect(screen.getByText(/professional photography services/i)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive digital media solutions/i)).toBeInTheDocument()
    expect(screen.getByText(/data-driven marketing strategies/i)).toBeInTheDocument()
  })

  it('renders "More Details" links for each card', () => {
    render(<About />)
    const links = screen.getAllByText('More Details')
    expect(links).toHaveLength(4)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#about-us')
    }
  })

  it('renders icon circles with correct classes', () => {
    render(<About />)
    // 4 icon circles
    const circles = document.querySelectorAll('.bg-primary-500.rounded-full')
    expect(circles).toHaveLength(4)
    for (const circle of circles) {
      expect(circle).toHaveClass('w-16')
      expect(circle).toHaveClass('h-16')
      expect(circle).toHaveClass('text-white')
      expect(circle).toHaveClass('flex')
      expect(circle).toHaveClass('items-center')
      expect(circle).toHaveClass('justify-center')
    }
  })

  it('accepts custom className', () => {
    render(<About className="custom-about" />)
    expect(document.querySelector('#about-us')).toHaveClass('custom-about')
  })
})
