import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { YogaClasses } from './YogaClasses'

describe('YogaClasses', () => {
  it('renders the section heading and subtitle', () => {
    render(<YogaClasses />)

    expect(screen.getByRole('heading', { level: 2, name: /Our Classes/ })).toBeInTheDocument()

    expect(screen.getByText(/We offer a variety of yoga classes/)).toBeInTheDocument()
  })

  it('renders three class cards with correct titles', () => {
    render(<YogaClasses />)

    expect(screen.getByRole('heading', { level: 3, name: 'Yoga' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pilates' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Hatha' })).toBeInTheDocument()
  })

  it('renders descriptions for each class', () => {
    render(<YogaClasses />)

    expect(screen.getByText(/Flow through dynamic sequences/)).toBeInTheDocument()
    expect(screen.getByText(/Strengthen your core and improve posture/)).toBeInTheDocument()
    expect(screen.getByText(/Explore foundational poses/)).toBeInTheDocument()
  })

  it('renders icons for each class card', () => {
    const { container } = render(<YogaClasses />)

    // Each card should have an icon container
    const iconContainers = container.querySelectorAll('.rounded-full')
    expect(iconContainers.length).toBe(3)
  })

  it('has the correct section id', () => {
    const { container } = render(<YogaClasses />)

    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'classes')
  })
})
