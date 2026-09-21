import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeaturedTrainer } from './FeaturedTrainer'

describe('FeaturedTrainer', () => {
  it('renders the trainer name', () => {
    render(<FeaturedTrainer />)
    expect(screen.getByText('Shane Green')).toBeInTheDocument()
  })

  it('renders the trainer title', () => {
    render(<FeaturedTrainer />)
    expect(screen.getByText('Head Coach')).toBeInTheDocument()
  })

  it('renders the blockquote', () => {
    render(<FeaturedTrainer />)
    expect(screen.getByText(/Fitness is not about being better/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<FeaturedTrainer />)
    expect(screen.getByText('Make Me Your Trainer')).toBeInTheDocument()
  })

  it('renders the trainer photo', () => {
    render(<FeaturedTrainer />)
    const img = screen.getByAltText('Featured trainer Shane Green')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('has an id of trainer on the section', () => {
    render(<FeaturedTrainer />)
    expect(document.getElementById('trainer')).toBeTruthy()
  })
})
