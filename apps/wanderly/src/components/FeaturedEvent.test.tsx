import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedEvent } from './FeaturedEvent'

describe('FeaturedEvent', () => {
  it('renders event label and title', () => {
    render(<FeaturedEvent />)
    expect(screen.getByText('Upcoming Event')).toBeInTheDocument()
    expect(screen.getByText('Maldives — Asia')).toBeInTheDocument()
  })

  it('renders event details', () => {
    render(<FeaturedEvent />)
    expect(screen.getByText('12 Aug 2025')).toBeInTheDocument()
    expect(screen.getByText('Start from $820')).toBeInTheDocument()
    expect(screen.getByText('Wanderly Agency')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<FeaturedEvent />)
    expect(screen.getByText('Plan Details')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<FeaturedEvent />)
    expect(screen.getByText('Rating:')).toBeInTheDocument()
  })
})
