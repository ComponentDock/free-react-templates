import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Calendar } from './Calendar'

describe('Calendar', () => {
  it('renders the heading', () => {
    render(<Calendar />)
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })

  it('renders all three events', () => {
    render(<Calendar />)
    expect(screen.getByText('Opening Keynote')).toBeInTheDocument()
    expect(screen.getByText('Innovation Workshop')).toBeInTheDocument()
    expect(screen.getByText('Closing Ceremony')).toBeInTheDocument()
  })

  it('renders event images', () => {
    render(<Calendar />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders Buy Now links', () => {
    render(<Calendar />)
    const links = screen.getAllByText('Buy Now')
    expect(links).toHaveLength(3)
  })

  it('renders dates', () => {
    render(<Calendar />)
    expect(screen.getByText('15 Mar 2026')).toBeInTheDocument()
    expect(screen.getByText('16 Mar 2026')).toBeInTheDocument()
    expect(screen.getByText('17 Mar 2026')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<Calendar />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has a table element', () => {
    render(<Calendar />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
