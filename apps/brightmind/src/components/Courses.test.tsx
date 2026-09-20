import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders course cards with category, title, and enroll link', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { name: 'Our Courses' })).toBeInTheDocument()
    expect(screen.getByText('English for Tomorrow')).toBeInTheDocument()
    expect(screen.getByText('Science & Innovation')).toBeInTheDocument()
    expect(screen.getByText('Advanced Mathematics')).toBeInTheDocument()
    const enrollLinks = screen.getAllByRole('link', { name: /Enroll Now/i })
    expect(enrollLinks).toHaveLength(3)
  })
})
