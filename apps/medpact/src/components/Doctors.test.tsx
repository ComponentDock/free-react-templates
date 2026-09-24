import { render, screen } from '@testing-library/react'
import { Doctors } from './Doctors'
import { doctorsTitle, doctors } from '../data'
import { describe, expect, it } from 'vitest'

describe('Doctors', () => {
  it('renders the section heading', () => {
    render(<Doctors />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(doctorsTitle)
  })

  it('renders all doctor cards with names and specialties', () => {
    render(<Doctors />)
    for (const doc of doctors) {
      expect(screen.getByText(doc.name)).toBeInTheDocument()
      expect(screen.getByText(doc.specialty)).toBeInTheDocument()
    }
  })

  it('renders doctor images', () => {
    render(<Doctors />)
    for (const doc of doctors) {
      expect(screen.getByRole('img', { name: new RegExp(doc.name, 'i') })).toBeInTheDocument()
    }
  })

  it('renders exactly 4 doctor cards', () => {
    render(<Doctors />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(doctors.length)
  })
})
