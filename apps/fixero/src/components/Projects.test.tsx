import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
  })

  it('renders all 6 project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Modern Kitchen Renovation')).toBeInTheDocument()
    expect(screen.getByText('Custom Home Construction')).toBeInTheDocument()
    expect(screen.getByText('Bathroom Remodel')).toBeInTheDocument()
    expect(screen.getByText('Office Space Build-Out')).toBeInTheDocument()
    expect(screen.getByText('Interior Finishing Work')).toBeInTheDocument()
    expect(screen.getByText('Privacy Fence Installation')).toBeInTheDocument()
  })
})
