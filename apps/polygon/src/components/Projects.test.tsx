import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders all 6 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Skyline Tower')).toBeInTheDocument()
    expect(screen.getByText('Harbor View')).toBeInTheDocument()
    expect(screen.getByText('Green Quarter')).toBeInTheDocument()
    expect(screen.getByText('Metro Square')).toBeInTheDocument()
    expect(screen.getByText('Riverside Lofts')).toBeInTheDocument()
    expect(screen.getByText('Apex Center')).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('has correct section id', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })

  it('renders section description', () => {
    render(<Projects />)
    expect(screen.getByText(/innovative design solutions/)).toBeInTheDocument()
  })
})
