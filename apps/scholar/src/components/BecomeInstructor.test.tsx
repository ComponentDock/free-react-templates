import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BecomeInstructor } from './BecomeInstructor'

describe('BecomeInstructor', () => {
  it('renders the heading, description, 3 features, CTA button, and watch video link', () => {
    render(<BecomeInstructor />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Become an Instructor' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Join the world.*largest online learning marketplace/),
    ).toBeInTheDocument()

    const checks = screen.getAllByRole('listitem')
    expect(checks).toHaveLength(3)
    expect(screen.getByText('Share your knowledge with thousands of students')).toBeInTheDocument()
    expect(screen.getByText('Earn money from course sales')).toBeInTheDocument()
    expect(screen.getByText('Build your personal brand as an expert')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Become an Instructor' })).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
    expect(screen.getByAltText('Instructor teaching online')).toBeInTheDocument()
  })
})
