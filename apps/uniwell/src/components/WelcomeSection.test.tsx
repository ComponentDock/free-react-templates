import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomeSection } from './WelcomeSection'

describe('WelcomeSection', () => {
  it('renders the section heading', () => {
    render(<WelcomeSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Welcome To Uniwell E-Learning',
    )
  })

  it('renders the description text', () => {
    render(<WelcomeSection />)
    expect(
      screen.getByText(/Uniwell provides a comprehensive online learning platform/),
    ).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<WelcomeSection />)
    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('Certified Programs')).toBeInTheDocument()
    expect(screen.getByText('Campus Life')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WelcomeSection />)
    expect(screen.getByText(/Browse over 1,200 expert-led courses/)).toBeInTheDocument()
    expect(screen.getByText(/Learn from industry professionals/)).toBeInTheDocument()
    expect(screen.getByText(/Earn recognized certificates/)).toBeInTheDocument()
    expect(screen.getByText(/Join a vibrant community/)).toBeInTheDocument()
  })
})
