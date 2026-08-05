import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading, three project cards with categories, and the Show All Works button', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured Projects' })).toBeInTheDocument()

    for (const project of ['Project Name 1', 'Project Name 2', 'Project Name 3']) {
      expect(screen.getByRole('heading', { level: 3, name: project })).toBeInTheDocument()
    }

    expect(screen.getByText('Web Application')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()

    expect(screen.getAllByRole('img')).toHaveLength(3)

    expect(screen.getByRole('link', { name: 'Show All Works' })).toBeInTheDocument()
  })
})
