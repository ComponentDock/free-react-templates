import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { name: 'Popular Courses' })).toBeInTheDocument()
  })

  it('renders all three course cards', () => {
    render(<Courses />)
    const titles = ['Digital Marketing', 'Web Development', 'Graphic Design']
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders prices and enroll buttons', () => {
    render(<Courses />)
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
    const enrollButtons = screen.getAllByRole('link', { name: 'Enroll Now' })
    expect(enrollButtons).toHaveLength(3)
  })
})
