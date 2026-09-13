import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Features That make us Unique')).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Multiple Layouts')).toBeInTheDocument()
    expect(screen.getByText('Clean Coding')).toBeInTheDocument()
    expect(screen.getByText('Endless Features')).toBeInTheDocument()
    expect(screen.getByText('Fully Customizable')).toBeInTheDocument()
  })
})
