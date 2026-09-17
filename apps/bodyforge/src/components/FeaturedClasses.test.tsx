import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedClasses } from './FeaturedClasses'

describe('FeaturedClasses', () => {
  it('renders the section heading and three class cards', () => {
    render(<FeaturedClasses />)

    expect(screen.getByText('Featured Classes')).toBeInTheDocument()
    expect(screen.getByText('Cardio Blast')).toBeInTheDocument()
    expect(screen.getByText('Strength Training')).toBeInTheDocument()
    expect(screen.getByText('Yoga Flow')).toBeInTheDocument()
  })

  it('shows a Details button for each class card', () => {
    render(<FeaturedClasses />)

    const buttons = screen.getAllByRole('button', { name: 'Details' })
    expect(buttons).toHaveLength(3)
  })

  it('renders images with correct alt text', () => {
    render(<FeaturedClasses />)

    expect(screen.getByRole('img', { name: 'Cardio Blast' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Strength Training' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Yoga Flow' })).toBeInTheDocument()
  })

  it('renders class descriptions', () => {
    render(<FeaturedClasses />)

    expect(screen.getByText(/High-intensity cardio sessions/)).toBeInTheDocument()
    expect(screen.getByText(/Build lean muscle/)).toBeInTheDocument()
    expect(screen.getByText(/Improve flexibility/)).toBeInTheDocument()
  })
})
