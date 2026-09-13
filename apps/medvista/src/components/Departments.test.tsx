import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders all 9 department cards', () => {
    render(<Departments />)
    const names = [
      'Neurology',
      'Surgical',
      'Dental',
      'Ophthalmology',
      'Cardiology',
      'Traumatology',
      'Nuclear Magnetic',
      'X-ray',
    ]
    names.forEach((name) => {
      const headings = screen.getAllByRole('heading', { name })
      expect(headings.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('has a background image on the left column', () => {
    render(<Departments />)
    const bgEl = document.querySelector('[style*="medvista-dept"]')
    expect(bgEl).toBeInTheDocument()
  })
})
