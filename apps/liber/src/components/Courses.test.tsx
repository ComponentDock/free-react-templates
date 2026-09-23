import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading and all course cards', () => {
    render(<Courses />)
    expect(screen.getByText(/Top Courses/i)).toBeInTheDocument()
    expect(screen.getByText('Breakthrough Thinking')).toBeInTheDocument()
    expect(screen.getByText('Creative Writing 101')).toBeInTheDocument()
    expect(screen.getByText('Storytelling Mastery')).toBeInTheDocument()
  })

  it('displays prices and view course links', () => {
    render(<Courses />)
    expect(screen.getByText('$25')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$35')).toBeInTheDocument()
    const viewButtons = screen.getAllByRole('link', { name: /View Course/i })
    expect(viewButtons).toHaveLength(3)
  })
})
