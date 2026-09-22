import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  beforeEach(() => {
    render(<Doctors />)
  })

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /meet our doctors/i })).toBeInTheDocument()
  })

  it('renders the Our Team label', () => {
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('renders all three doctor cards', () => {
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('renders each doctor specialty', () => {
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
    expect(screen.getByText('Pediatrician')).toBeInTheDocument()
  })

  it('renders doctor images with alt text', () => {
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('alt', 'Photo of Dr. Sarah Mitchell')
    expect(images[1]).toHaveAttribute('alt', 'Photo of Dr. James Wilson')
    expect(images[2]).toHaveAttribute('alt', 'Photo of Dr. Emily Chen')
  })
})
