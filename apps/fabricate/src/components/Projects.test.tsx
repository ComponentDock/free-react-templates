import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Finished Projects')
  })

  it('renders project images', () => {
    render(<Projects />)
    expect(screen.getByAltText('Industrial project 1')).toBeInTheDocument()
    expect(screen.getByAltText('Industrial project 2')).toBeInTheDocument()
    expect(screen.getByAltText('Industrial project 3')).toBeInTheDocument()
    expect(screen.getByAltText('Industrial project 4')).toBeInTheDocument()
  })
})
