import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText(/Take a look around/i)).toBeInTheDocument()
  })

  it('renders the More Projects link', () => {
    render(<Projects />)
    expect(screen.getByText('More Projects')).toBeInTheDocument()
  })

  it('renders 2 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Research and Development Center')).toBeInTheDocument()
    expect(screen.getByText('Technological Park Project')).toBeInTheDocument()
  })

  it('renders project categories', () => {
    render(<Projects />)
    expect(screen.getByText('Industrial Construction')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Engineering')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
