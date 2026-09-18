import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentProjects } from './RecentProjects'

describe('RecentProjects', () => {
  it('renders the heading and description', () => {
    render(<RecentProjects />)
    expect(screen.getByRole('heading', { name: /recent projects/i })).toBeInTheDocument()
    expect(screen.getByText(/latest aerial photography/i)).toBeInTheDocument()
  })

  it('renders the project image', () => {
    render(<RecentProjects />)
    expect(screen.getByAltText(/recent drone photography project/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<RecentProjects />)
    const btn = screen.getByRole('link', { name: /view all projects/i })
    expect(btn).toHaveAttribute('href', '#services')
  })
})
