import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and label', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
  })

  it('renders all five project captions', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /La Lega Stadium/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /France Building/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /22 New Homes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Manage Center/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Sports Hall/i })).toBeInTheDocument()
    expect(screen.getByText('Madrid, Spain')).toBeInTheDocument()
  })

  it('renders a project image for every gallery item', () => {
    const { container } = render(<Projects />)
    expect(container.querySelectorAll('img')).toHaveLength(5)
  })
})
