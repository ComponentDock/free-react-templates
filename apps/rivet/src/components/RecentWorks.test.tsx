import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentWorks } from './RecentWorks'

describe('RecentWorks', () => {
  it('renders the heading', () => {
    render(<RecentWorks />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Works')
  })

  it('renders all three work cards', () => {
    render(<RecentWorks />)
    expect(screen.getByText('Modern Office Complex')).toBeInTheDocument()
    expect(screen.getByText('Residential Tower')).toBeInTheDocument()
    expect(screen.getByText('Industrial Facility')).toBeInTheDocument()
  })

  it('renders work images with correct src', () => {
    render(<RecentWorks />)
    const images = screen.getAllByRole('img')
    const workImages = images.filter((img) => img.getAttribute('src')?.includes('rivet-work'))
    expect(workImages).toHaveLength(3)
  })

  it('renders View All Works button', () => {
    render(<RecentWorks />)
    expect(screen.getByRole('link', { name: 'View All Works' })).toBeInTheDocument()
  })
})
