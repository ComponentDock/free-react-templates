import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('What I Do')).toBeInTheDocument()
    expect(screen.getByText('Strategy, design and a bit of magic')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Create')).toBeInTheDocument()
    expect(screen.getByText('Learn')).toBeInTheDocument()
  })

  it('renders sub-services for each card', () => {
    render(<Services />)
    expect(screen.getByText('Design Sprints')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design')).toBeInTheDocument()
    expect(screen.getByText('Prototyping')).toBeInTheDocument()
  })
})
