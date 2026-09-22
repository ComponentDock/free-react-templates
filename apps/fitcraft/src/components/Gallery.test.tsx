import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all 6 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders gallery item titles', () => {
    render(<Gallery />)
    expect(screen.getByText('Strength Zone')).toBeInTheDocument()
    expect(screen.getByText('Cardio Studio')).toBeInTheDocument()
    expect(screen.getByText('Free Weights')).toBeInTheDocument()
    expect(screen.getByText('Group Classes')).toBeInTheDocument()
    expect(screen.getByText('Recovery Area')).toBeInTheDocument()
    expect(screen.getByText('Training Floor')).toBeInTheDocument()
  })

  it('has the gallery section id', () => {
    const { container } = render(<Gallery />)
    expect(container.querySelector('#gallery')).toBeInTheDocument()
  })
})
