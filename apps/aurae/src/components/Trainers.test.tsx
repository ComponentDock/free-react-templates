import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the section heading', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: /Our Trainers/i })).toBeInTheDocument()
  })

  it('renders all three trainer profiles', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { name: /Lori Kennedy/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rebecca James/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Jennifer Lambert/i })).toBeInTheDocument()
  })

  it('renders trainer roles', () => {
    render(<Trainers />)
    const yogaTrainers = screen.getAllByText('Yoga Trainer')
    expect(yogaTrainers.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Meditation Guide')).toBeInTheDocument()
  })

  it('renders contact links for each trainer', () => {
    render(<Trainers />)
    const emailLinks = screen.getAllByLabelText('Email trainer')
    expect(emailLinks.length).toBeGreaterThanOrEqual(3)
    const phoneLinks = screen.getAllByLabelText('Call trainer')
    expect(phoneLinks.length).toBeGreaterThanOrEqual(3)
  })
})
