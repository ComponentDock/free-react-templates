import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders the heading and every role in the timeline', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /career journey/i })).toBeInTheDocument()
    for (const title of [
      'Senior Developer',
      'Full-stack Developer',
      'Frontend Developer',
      'Junior Developer',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders companies, periods, and blurbs', () => {
    render(<Experience />)
    expect(screen.getByText(/TechCorp/i)).toBeInTheDocument()
    expect(screen.getByText(/2022 — Present/i)).toBeInTheDocument()
    expect(screen.getByText(/mentoring engineers/i)).toBeInTheDocument()
    expect(screen.getByText(/Innovate Labs/i)).toBeInTheDocument()
    expect(screen.getByText(/Pixelworks/i)).toBeInTheDocument()
    expect(screen.getByText(/Startup Hub/i)).toBeInTheDocument()
  })
})
