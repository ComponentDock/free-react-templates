import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Learn Online Courses')).toBeInTheDocument()
    expect(screen.getByText('No.1 of Universities')).toBeInTheDocument()
    expect(screen.getByText('Huge Library')).toBeInTheDocument()
  })

  it('renders Join Now links', () => {
    render(<Features />)
    const links = screen.getAllByText('Join Now')
    expect(links).toHaveLength(3)
  })
})
