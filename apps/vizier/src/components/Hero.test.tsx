import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero section with first model name', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByText('Jesse')).toBeInTheDocument()
    expect(screen.getByText('Edwards')).toBeInTheDocument()
    expect(screen.getByText('Star Model 2019')).toBeInTheDocument()
  })

  it('navigates slides with arrow buttons', () => {
    render(<Hero />)
    const nextBtn = screen.getByLabelText('Next slide')
    fireEvent.click(nextBtn)
    expect(screen.getByText('Naznin')).toBeInTheDocument()
    expect(screen.getByText('Niloy')).toBeInTheDocument()
  })

  it('navigates to previous slide', () => {
    render(<Hero />)
    const prevBtn = screen.getByLabelText('Previous slide')
    fireEvent.click(prevBtn)
    expect(screen.getByText('Shaila')).toBeInTheDocument()
    expect(screen.getByText('Ritu')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('YouTube')).toBeInTheDocument()
  })

  it('navigates via slide indicators', () => {
    render(<Hero />)
    const indicators = screen.getAllByRole('button', { name: /Go to slide/i })
    expect(indicators).toHaveLength(3)
    fireEvent.click(indicators[2]!)
    expect(screen.getByText('Shaila')).toBeInTheDocument()
  })

  it('renders View Profile button', () => {
    render(<Hero />)
    expect(screen.getByText('View Profile →')).toBeInTheDocument()
  })
})
