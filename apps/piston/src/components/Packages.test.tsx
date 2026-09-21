import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders heading and all 3 pricing cards', () => {
    render(<Packages />)
    expect(screen.getByText('Our Packages')).toBeInTheDocument()
    expect(screen.getByText('Muscle Build Pro')).toBeInTheDocument()
    expect(screen.getByText('Women Strength Training')).toBeInTheDocument()
    expect(screen.getByText('Fat Burning Pro')).toBeInTheDocument()
  })

  it('renders prices and Enroll Now buttons', () => {
    render(<Packages />)
    expect(screen.getAllByText('$98.75')).toHaveLength(2)
    expect(screen.getByText('$20.87')).toBeInTheDocument()
    expect(screen.getAllByText('Enroll Now')).toHaveLength(3)
  })
})
