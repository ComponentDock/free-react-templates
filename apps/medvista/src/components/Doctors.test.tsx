import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('renders the section heading', () => {
    render(<Doctors />)
    expect(screen.getByRole('heading', { name: /Our Qualified Doctors/i })).toBeInTheDocument()
  })

  it('renders 4 doctor cards with names', () => {
    render(<Doctors />)
    expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Thompson')).toBeInTheDocument()
  })

  it('renders specialties in uppercase', () => {
    render(<Doctors />)
    const specialties = screen.getAllByText(/^(Cardiology|Neurology|Ophthalmology|Dental)$/)
    expect(specialties.length).toBe(4)
    specialties.forEach((el) => {
      expect(el).toHaveClass('uppercase')
    })
  })

  it('renders Book now buttons', () => {
    render(<Doctors />)
    const bookButtons = screen.getAllByText('Book now')
    expect(bookButtons).toHaveLength(4)
  })

  it('renders doctor images', () => {
    render(<Doctors />)
    const images = screen.getAllByRole('img')
    const docImages = images.filter((img) => (img as HTMLImageElement).src.includes('medvista-doc'))
    expect(docImages).toHaveLength(4)
  })
})
