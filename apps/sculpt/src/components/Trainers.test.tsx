import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Trainers } from './Trainers'
import { TRAINERS } from '../data'

describe('Trainers', () => {
  it('renders the heading and all five trainer entries', () => {
    render(<Trainers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Trainers' })).toBeInTheDocument()
    for (const trainer of TRAINERS) {
      expect(screen.getByRole('heading', { level: 3, name: trainer.name })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Power Trainer')).toHaveLength(1)
    expect(screen.getAllByText('Yoga Trainer')).toHaveLength(1)
    expect(screen.getAllByText('Dance Trainer')).toHaveLength(1)
    expect(screen.getAllByText('Boxing Trainer')).toHaveLength(2)
  })

  it('navigates the carousel with next/prev controls', () => {
    render(<Trainers />)
    fireEvent.click(screen.getByRole('button', { name: 'Next trainers' }))
    const track = document.querySelector('.flex.transition-transform')!
    expect(track.getAttribute('style')).toContain('translateX(-33.33')
    fireEvent.click(screen.getByRole('button', { name: 'Previous trainers' }))
    expect(track.getAttribute('style')).toContain('translateX(-0')
  })

  it('wraps the carousel at both ends', () => {
    render(<Trainers />)
    const track = document.querySelector('.flex.transition-transform')!
    fireEvent.click(screen.getByRole('button', { name: 'Previous trainers' }))
    expect(track.getAttribute('style')).toContain('translateX(-66.66')
    fireEvent.click(screen.getByRole('button', { name: 'Next trainers' }))
    expect(track.getAttribute('style')).toContain('translateX(-0')
  })
})
