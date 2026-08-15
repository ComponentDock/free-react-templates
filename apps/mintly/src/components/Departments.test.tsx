import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Departments } from './Departments'
import { departments } from '../data'

describe('Departments', () => {
  it('renders the section heading and sub-line', () => {
    render(<Departments />)

    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()
  })

  it('renders all six department cards with title and description', () => {
    render(<Departments />)

    for (const department of departments) {
      expect(screen.getByRole('heading', { name: department.title })).toBeInTheDocument()
      expect(screen.getByText(department.description)).toBeInTheDocument()
    }
  })
})
