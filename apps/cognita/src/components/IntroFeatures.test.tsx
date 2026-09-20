import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroFeatures } from './IntroFeatures'

describe('IntroFeatures', () => {
  it('renders three feature cards', () => {
    render(<IntroFeatures />)

    expect(screen.getByRole('heading', { name: 'Learn Courses Online' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Online Library Store' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /50% off/i })).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<IntroFeatures />)

    expect(screen.getByText(/access hundreds of courses/i)).toBeInTheDocument()
    expect(screen.getByText(/browse our extensive library/i)).toBeInTheDocument()
    expect(screen.getByText(/take advantage of our limited-time/i)).toBeInTheDocument()
  })
})
