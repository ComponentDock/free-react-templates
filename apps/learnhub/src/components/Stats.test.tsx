import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all stat values', () => {
    render(<Stats />)
    expect(screen.getByText('250')).toBeInTheDocument()
    expect(screen.getByText('15,000')).toBeInTheDocument()
    expect(screen.getByText('92%')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Courses Available')).toBeInTheDocument()
    expect(screen.getByText('Students Enrolled')).toBeInTheDocument()
    expect(screen.getByText('Career Advancement')).toBeInTheDocument()
    expect(screen.getByText('Countries Reached')).toBeInTheDocument()
  })
})
