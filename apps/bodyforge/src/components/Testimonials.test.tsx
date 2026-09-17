import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and three testimonials', () => {
    render(<Testimonials />)

    expect(screen.getByText('Happy Client Says')).toBeInTheDocument()
    expect(screen.getByText('Alice Morgan')).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
  })

  it('displays quotes and membership titles', () => {
    render(<Testimonials />)

    expect(screen.getByText(/BodyForge completely transformed/)).toBeInTheDocument()
    expect(screen.getAllByText('Member since 2024')).toHaveLength(2)
    expect(screen.getByText('Member since 2023')).toBeInTheDocument()
  })

  it('renders avatar images with alt text', () => {
    render(<Testimonials />)

    expect(screen.getByRole('img', { name: 'Alice Morgan' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Robert Chen' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Priya Sharma' })).toBeInTheDocument()
  })
})
