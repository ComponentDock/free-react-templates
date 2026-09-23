import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders subtitle', () => {
    render(<About />)
    expect(screen.getByText('About Our Law agency')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /we are committed for better service/i }),
    ).toBeInTheDocument()
  })

  it('renders two paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/decades of combined experience/i)).toBeInTheDocument()
    expect(screen.getByText(/every case is unique/i)).toBeInTheDocument()
  })

  it('renders Learn About Us button', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /learn about us/i })
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText('Law agency team')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/casepoint-about/600/400')
  })
})
