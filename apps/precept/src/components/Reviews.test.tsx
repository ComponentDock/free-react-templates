import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders section heading', () => {
    render(<Reviews />)
    expect(screen.getByText(/Expert Instructors/i)).toBeInTheDocument()
  })

  it('renders all instructor cards', () => {
    render(<Reviews />)
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument()
    expect(screen.getByText('Jenny Wilson')).toBeInTheDocument()
    expect(screen.getByText('Robert Fox')).toBeInTheDocument()
  })
})
