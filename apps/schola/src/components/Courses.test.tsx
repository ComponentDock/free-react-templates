import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { name: /Featured Courses/ })).toBeInTheDocument()
  })

  it('shows course cards with titles, instructors, ratings, and prices', () => {
    render(<Courses />)
    expect(screen.getByText('Complete Machine Learning & AI Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Advanced UI/UX Design Masterclass')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack React & Node.js Development')).toBeInTheDocument()
    expect(screen.getByText('Dr. Maya Chen')).toBeInTheDocument()
    expect(screen.getByText('4.96')).toBeInTheDocument()
    expect(screen.getByText('$89.99')).toBeInTheDocument()
  })
})
