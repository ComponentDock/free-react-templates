import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'
import { departments } from '../data'

describe('Departments', () => {
  it('renders the section title and all six department cards', () => {
    const { container } = render(<Departments />)

    expect(screen.getByRole('heading', { name: 'Our Departments' })).toBeInTheDocument()

    for (const department of departments) {
      expect(screen.getByRole('heading', { name: department.title })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
