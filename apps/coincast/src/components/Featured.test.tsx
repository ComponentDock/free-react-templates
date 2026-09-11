import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Featured } from './Featured'

describe('Featured', () => {
  it('renders 3 feature cards', () => {
    render(<Featured />)
    expect(screen.getByText('Crypto Trading')).toBeInTheDocument()
    expect(screen.getByText('Secure Storage')).toBeInTheDocument()
    expect(screen.getByText('Market Analysis')).toBeInTheDocument()
  })

  it('renders Read More links for each card', () => {
    render(<Featured />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders feature card images with alt text', () => {
    render(<Featured />)
    expect(screen.getByAltText('Crypto Trading')).toBeInTheDocument()
    expect(screen.getByAltText('Secure Storage')).toBeInTheDocument()
    expect(screen.getByAltText('Market Analysis')).toBeInTheDocument()
  })
})
