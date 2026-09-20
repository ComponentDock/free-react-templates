import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders four feature items', () => {
    render(<Features />)
    expect(screen.getByText('Learn Anything You Want Today')).toBeInTheDocument()
    expect(screen.getByText('Expert Instructors')).toBeInTheDocument()
    expect(screen.getByText('Flexible Learning')).toBeInTheDocument()
    expect(screen.getByText('Certified Courses')).toBeInTheDocument()
    expect(screen.getByText('Global Community')).toBeInTheDocument()
  })
})
