import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Done Projects' })).toBeInTheDocument()
  })

  it('displays all 8 project images', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
  })

  it('has the section id projects', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })

  it('shows project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Residential Rooftop')).toBeInTheDocument()
    expect(screen.getByText('Commercial Complex')).toBeInTheDocument()
    expect(screen.getByText('Sports Arena')).toBeInTheDocument()
  })
})
