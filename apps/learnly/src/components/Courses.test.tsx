import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()
  })

  it('renders all six course cards', () => {
    render(<Courses />)
    expect(screen.getByText('How To Create Mobile Apps Using Ionic')).toBeInTheDocument()
    expect(screen.getByText('Mastering Web Design Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Advanced Arithmetic & Mathematics')).toBeInTheDocument()
    expect(screen.getByText('Building iOS Apps with Swift')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design Principles')).toBeInTheDocument()
    expect(screen.getByText('Python for Data Science')).toBeInTheDocument()
  })

  it('renders price badges', () => {
    render(<Courses />)
    const prices = screen.getAllByText('$99.00')
    expect(prices).toHaveLength(6)
  })

  it('renders Enroll buttons', () => {
    render(<Courses />)
    const buttons = screen.getAllByText('Enroll In This Course')
    expect(buttons).toHaveLength(6)
  })

  it('renders star ratings', () => {
    render(<Courses />)
    expect(screen.getAllByLabelText('5 out of 5 stars')).toHaveLength(6)
  })

  it('renders course images', () => {
    render(<Courses />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
