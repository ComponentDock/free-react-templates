import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders heading and description', () => {
    render(<AboutSplit />)
    expect(screen.getByText(/Welcome to Vitaflow/)).toBeInTheDocument()
    expect(screen.getByText(/Health coaching is a natural way/)).toBeInTheDocument()
  })

  it('renders founder info', () => {
    render(<AboutSplit />)
    expect(screen.getByText('Cythia Hunter')).toBeInTheDocument()
    expect(screen.getByText('Personal Dietitian')).toBeInTheDocument()
  })

  it('renders coach image', () => {
    render(<AboutSplit />)
    const images = screen.getAllByRole('img')
    expect(images.some((img) => (img as HTMLImageElement).alt === 'Health coach')).toBe(true)
  })
})
