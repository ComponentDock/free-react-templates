import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoursesSection } from './CoursesSection'

describe('CoursesSection', () => {
  it('renders the section heading', () => {
    render(<CoursesSection />)
    expect(screen.getByRole('heading', { name: /Popular Courses/i })).toBeInTheDocument()
  })

  it('renders all four course titles', () => {
    render(<CoursesSection />)
    expect(screen.getByText('Creative Colors Workshop')).toBeInTheDocument()
    expect(screen.getByText('Rhythm & Melody Class')).toBeInTheDocument()
    expect(screen.getByText('Little Scientists Lab')).toBeInTheDocument()
    expect(screen.getByText('Story Time Adventures')).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<CoursesSection />)
    expect(screen.getByText('Art & Craft')).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Science')).toBeInTheDocument()
    expect(screen.getByText('Language')).toBeInTheDocument()
  })
})
