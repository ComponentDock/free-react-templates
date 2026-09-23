import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByText('Browse Top Categories')).toBeInTheDocument()
  })

  it('renders 8 category cards', () => {
    render(<Categories />)
    expect(screen.getByText('Design & Creative')).toBeInTheDocument()
    expect(screen.getByText('Design & Development')).toBeInTheDocument()
    expect(screen.getByText('Sales & Marketing')).toBeInTheDocument()
    expect(screen.getByText('Mobile Application')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Content Writer')).toBeInTheDocument()
    expect(screen.getByText('Information Technology')).toBeInTheDocument()
  })

  it('shows count for each category', () => {
    render(<Categories />)
    const counts = screen.getAllByText('(653)')
    expect(counts.length).toBe(1)
    const counts658 = screen.getAllByText('(658)')
    expect(counts658.length).toBe(7)
  })

  it('renders Browse All Sectors button', () => {
    render(<Categories />)
    expect(screen.getByText('Browse All Sectors')).toBeInTheDocument()
  })
})
