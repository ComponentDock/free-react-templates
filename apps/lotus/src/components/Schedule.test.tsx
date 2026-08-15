import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('shows the heading and Monday rows with time, class name, and join button', () => {
    render(<Schedule />)
    expect(screen.getByRole('heading', { name: 'Classes Schedule' })).toBeInTheDocument()
    expect(screen.getByText('7:00am - 8:00am')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic Exercise' })).toBeInTheDocument()
    expect(screen.getByText('9:00am - 11:00am')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Yoga Program' })).toBeInTheDocument()
    expect(screen.getByText('1:00pm - 4:00pm')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Body Building' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Join now' })).toHaveLength(3)
  })
})
