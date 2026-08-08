import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('renders the heading and all four trainer cards', () => {
    render(<Trainers />)

    expect(screen.getByRole('heading', { name: 'Expert Trainers' })).toBeInTheDocument()

    for (const name of ['Marcus Johnson', 'Sarah Chen', 'Diego Reyes', 'Emily Park']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('shows specialty and years of experience per trainer', () => {
    render(<Trainers />)

    expect(screen.getByText('Strength & Conditioning')).toBeInTheDocument()
    expect(screen.getByText('12 years experience')).toBeInTheDocument()
    expect(screen.getByText('Yoga & Flexibility')).toBeInTheDocument()
    expect(screen.getByText('8 years experience')).toBeInTheDocument()
    expect(screen.getByText('Boxing & MMA')).toBeInTheDocument()
    expect(screen.getByText('10 years experience')).toBeInTheDocument()
    expect(screen.getByText('CrossFit & HIIT')).toBeInTheDocument()
    expect(screen.getByText('7 years experience')).toBeInTheDocument()
  })

  it('links each trainer to social profiles', () => {
    render(<Trainers />)

    expect(screen.getByRole('link', { name: 'Marcus Johnson on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Marcus Johnson on Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Emily Park on Instagram' })).toBeInTheDocument()
  })
})
