import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the portfolio heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Portfolio')
  })

  it('renders 12 portfolio images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(12)
  })

  it('renders portfolio project titles', () => {
    render(<Portfolio />)
    expect(screen.getByText('Golden Hour')).toBeInTheDocument()
    expect(screen.getByText('Quiet Morning')).toBeInTheDocument()
    expect(screen.getByText('City Lights')).toBeInTheDocument()
  })

  it('has proper alt text on images', () => {
    render(<Portfolio />)
    const firstImage = screen.getAllByRole('img')[0]!
    expect(firstImage).toHaveAttribute('alt', 'Portfolio project 1')
  })
})
