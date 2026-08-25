import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the projects heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /We give you complete control/,
    )
  })

  it('renders both project items', () => {
    render(<Projects />)
    expect(screen.getByText('Logistic Solution')).toBeInTheDocument()
    expect(screen.getByText('Supply Chain Management')).toBeInTheDocument()
  })

  it('renders project numbers', () => {
    render(<Projects />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects />)
    const descriptions = screen.getAllByText(/Praesent eu rhoncus nibh/)
    expect(descriptions.length).toBe(2)
  })

  it('renders project view links', () => {
    render(<Projects />)
    expect(screen.getByRole('link', { name: 'View Logistic Solution' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Supply Chain Management' })).toBeInTheDocument()
  })
})
