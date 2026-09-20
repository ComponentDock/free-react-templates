import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Expert Speakers')).toBeInTheDocument()
    expect(screen.getByText('All-Day Summit')).toBeInTheDocument()
    expect(screen.getByText('Live Broadcast')).toBeInTheDocument()
    expect(screen.getByText('Early Bird')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Learn from industry leaders/)).toBeInTheDocument()
    expect(screen.getByText(/Three full days of keynotes/)).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Features />)
    const links = screen.getAllByText('read more')
    expect(links).toHaveLength(4)
  })

  it('has a section landmark', () => {
    render(<Features />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has proper heading structure', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
  })
})
