import { render, screen } from '@testing-library/react'
import { YogaClasses } from './YogaClasses'

describe('YogaClasses', () => {
  it('renders section heading', () => {
    render(<YogaClasses />)
    expect(screen.getByText('Yoga Classes')).toBeInTheDocument()
  })

  it('renders all six class cards', () => {
    render(<YogaClasses />)
    expect(screen.getByText('Yoga Barre')).toBeInTheDocument()
    expect(screen.getByText('Yoga Core')).toBeInTheDocument()
    expect(screen.getByText('Yoga For Health')).toBeInTheDocument()
    expect(screen.getByText('Yoga For Beginners')).toBeInTheDocument()
    expect(screen.getByText('Yoga for All')).toBeInTheDocument()
    expect(screen.getByText('Yoga Restore')).toBeInTheDocument()
  })

  it('renders read more links for each class', () => {
    render(<YogaClasses />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(6)
  })
})
