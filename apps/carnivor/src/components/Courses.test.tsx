import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders both course headings', () => {
    render(<Courses />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the CTA button', () => {
    render(<Courses />)
    expect(screen.getByRole('link', { name: /see full menu/i })).toBeInTheDocument()
  })

  it('renders the chef name', () => {
    render(<Courses />)
    expect(screen.getByText('Marco Rivera')).toBeInTheDocument()
  })

  it('renders food images', () => {
    render(<Courses />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
