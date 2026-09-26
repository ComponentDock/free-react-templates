import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/capture daily life/)
  })

  it('renders 4 gallery items', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Travelshots')).toBeInTheDocument()
    expect(screen.getByAltText('Experimental')).toBeInTheDocument()
    expect(screen.getByAltText("Father's Day")).toBeInTheDocument()
    expect(screen.getByAltText('Curious Cats')).toBeInTheDocument()
  })

  it('renders the More Portfolio button', () => {
    render(<Gallery />)
    expect(screen.getByRole('link', { name: /more portfolio/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Gallery />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })
})
