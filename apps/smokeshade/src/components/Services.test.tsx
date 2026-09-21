import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Best Services Save The World')).toBeInTheDocument()
  })

  it('renders three service items', () => {
    render(<Services />)
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Make Up')).toBeInTheDocument()
  })

  it('each service has a description', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Lorem ipsum|Ut enim|Duis aute/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
