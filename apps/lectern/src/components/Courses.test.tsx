import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByText(/our courses/i)).toBeInTheDocument()
  })

  it('renders all five courses', () => {
    render(<Courses />)
    expect(screen.getByText(/certificate course in writing/i)).toBeInTheDocument()
    expect(screen.getByText(/google adwords/i)).toBeInTheDocument()
    expect(screen.getByText(/ultimate drawing course/i)).toBeInTheDocument()
    expect(screen.getByText(/ultimate mysql bootcamp/i)).toBeInTheDocument()
    expect(screen.getByText(/web developer bootcamp/i)).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Courses />)
    expect(screen.getByText('$100', { exact: false })).toBeInTheDocument()
    expect(screen.getAllByText('$150', { exact: false })).toHaveLength(2)
    expect(screen.getByText('$180', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('$250', { exact: false })).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<Courses />)
    expect(screen.getByRole('region', { name: 'Courses' })).toBeInTheDocument()
  })
})
