import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Coaches } from './Coaches'

describe('Coaches', () => {
  it('renders the section heading and four coach cards', () => {
    render(<Coaches />)

    expect(screen.getByText('Our Fitness Coaches')).toBeInTheDocument()
    expect(screen.getByText('Mike Thompson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('Emma Davis')).toBeInTheDocument()
  })

  it('shows specialty for each coach', () => {
    render(<Coaches />)

    expect(screen.getByText('Strength Coach')).toBeInTheDocument()
    expect(screen.getByText('Yoga Instructor')).toBeInTheDocument()
    expect(screen.getByText('Cardio Specialist')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Expert')).toBeInTheDocument()
  })

  it('renders coach images with alt text', () => {
    render(<Coaches />)

    expect(screen.getByRole('img', { name: 'Mike Thompson' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sarah Williams' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'James Carter' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Emma Davis' })).toBeInTheDocument()
  })

  it('renders social media links for each coach', () => {
    render(<Coaches />)

    const facebookLinks = screen.getAllByRole('link', { name: 'Facebook' })
    const twitterLinks = screen.getAllByRole('link', { name: 'Twitter' })
    const linkedinLinks = screen.getAllByRole('link', { name: 'LinkedIn' })
    expect(facebookLinks).toHaveLength(4)
    expect(twitterLinks).toHaveLength(4)
    expect(linkedinLinks).toHaveLength(4)
  })
})
