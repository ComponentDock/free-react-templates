import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders section heading', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Clients')
  })

  it('renders client logos', () => {
    render(<Clients />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(screen.getByAltText('Client Alpha')).toBeInTheDocument()
    expect(screen.getByAltText('Client Zeta')).toBeInTheDocument()
  })

  it('client logos have grayscale styling', () => {
    render(<Clients />)
    const img = screen.getByAltText('Client Alpha')
    expect(img).toHaveClass('grayscale')
  })
})
