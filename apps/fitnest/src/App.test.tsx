import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fitnest — Yoga & Fitness Studio')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { name: /What hurts today/i })).toBeInTheDocument()
    // About
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    // Services
    expect(screen.getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()
    // ChooseUs
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    // Classes
    expect(screen.getByRole('heading', { name: 'Upcoming Yoga Courses' })).toBeInTheDocument()
    // Gallery
    expect(screen.getByRole('heading', { name: 'Our Studio' })).toBeInTheDocument()
    // Instructors
    expect(screen.getByRole('heading', { name: 'Expert Instructors' })).toBeInTheDocument()
    // Appointment
    expect(screen.getByRole('heading', { name: 'Make An Appointment' })).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: 'What Our Students Say' })).toBeInTheDocument()
  })
})
