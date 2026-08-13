import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Departments } from './Departments'
import { departments } from '../data'

describe('Departments', () => {
  it('renders the section heading and subtitle', () => {
    render(<Departments />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular department' }),
    ).toBeInTheDocument()
  })

  it('renders all four department cards with titles and images', () => {
    const { container } = render(<Departments />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(departments.length)
    departments.forEach((department, index) => {
      expect(images[index]).toHaveAttribute('src', department.image)
    })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(departments.length)
    expect(screen.getAllByText('cardiac clinic')).toHaveLength(2)
    expect(screen.getByText('plastic surgery')).toBeInTheDocument()
    expect(screen.getByText('dental clinic')).toBeInTheDocument()
  })

  it('renders a hover overlay with a white icon on each card image', () => {
    const { container } = render(<Departments />)
    const overlays = container.querySelectorAll('.bg-\\[rgba\\(1\\,2\\,14\\,0\\.4\\)\\]')
    expect(overlays).toHaveLength(departments.length)
    expect(overlays[0]).toHaveClass('opacity-0')
    expect(overlays[0]).toHaveClass('group-hover:opacity-100')
    expect(container.querySelectorAll('svg')).toHaveLength(departments.length)
  })
})
