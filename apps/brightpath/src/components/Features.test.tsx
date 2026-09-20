import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature titles', () => {
    render(<Features />)
    expect(screen.getByText('New Classes')).toBeInTheDocument()
    expect(screen.getByText('Top Courses')).toBeInTheDocument()
    expect(screen.getByText('Full E-Books')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/access freshly updated/i)).toBeInTheDocument()
    expect(screen.getByText(/learn from the highest-rated/i)).toBeInTheDocument()
    expect(screen.getByText(/supplement your learning/i)).toBeInTheDocument()
  })
})
