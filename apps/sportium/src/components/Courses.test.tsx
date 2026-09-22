import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section title', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { name: 'Our Courses' })).toBeInTheDocument()
  })

  it('renders all 6 course cards', () => {
    render(<Courses />)
    expect(screen.getByText('Weight Loss Class')).toBeInTheDocument()
    expect(screen.getByText('Yoga Classes')).toBeInTheDocument()
    expect(screen.getByText('Spinning Class')).toBeInTheDocument()
    expect(screen.getByText('Private Fit Class')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Classes')).toBeInTheDocument()
    expect(screen.getByText('Pilates Class')).toBeInTheDocument()
  })
})
