import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Projects')
  })

  it('renders 4 project items', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('shows project titles on hover', () => {
    render(<Projects />)
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByText('Project Beta')).toBeInTheDocument()
    expect(screen.getByText('Project Gamma')).toBeInTheDocument()
    expect(screen.getByText('Project Delta')).toBeInTheDocument()
  })
})
