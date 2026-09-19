import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders the section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByRole('heading', { name: 'Popular Online Courses' })).toBeInTheDocument()
  })

  it('renders three course cards with titles', () => {
    render(<PopularCourses />)
    expect(screen.getByText('English Grammar')).toBeInTheDocument()
    expect(screen.getByText('Vocabulary')).toBeInTheDocument()
    expect(screen.getByText('Expository Writing')).toBeInTheDocument()
  })

  it('renders course fees', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
  })
})
