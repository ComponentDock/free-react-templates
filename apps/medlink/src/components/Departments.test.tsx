import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

describe('Departments', () => {
  beforeEach(() => {
    render(<Departments />)
  })

  it('renders the section heading', () => {
    expect(screen.getByRole('heading', { level: 2, name: /our departments/i })).toBeInTheDocument()
  })

  it('renders the What We Offer label', () => {
    expect(screen.getByText('What We Offer')).toBeInTheDocument()
  })

  it('renders all six department names', () => {
    const departments = [
      'Cardiology',
      'Neurology',
      'Ophthalmology',
      'Orthopedics',
      'General',
      'Pediatrics',
    ]
    departments.forEach((dept) => {
      expect(screen.getByRole('heading', { level: 3, name: dept })).toBeInTheDocument()
    })
  })

  it('renders department descriptions', () => {
    expect(screen.getByText('Heart care and cardiovascular treatments.')).toBeInTheDocument()
    expect(screen.getByText('Brain and nervous system diagnostics.')).toBeInTheDocument()
    expect(screen.getByText('Specialized care for children.')).toBeInTheDocument()
  })

  it('renders six article cards', () => {
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)
  })

  it('has the #departments id on the section', () => {
    expect(document.getElementById('departments')).toBeInTheDocument()
  })
})
