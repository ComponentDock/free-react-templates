import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders the section heading', () => {
    render(<ProjectsSection />)
    expect(screen.getByText('Latest Projects')).toBeInTheDocument()
  })

  it('renders 6 project cards', () => {
    render(<ProjectsSection />)
    const cards = screen.getAllByText('Building A Condominium')
    expect(cards.length).toBe(6)
  })

  it('renders the subheading', () => {
    render(<ProjectsSection />)
    expect(screen.getByText('Our Global Work Industries')).toBeInTheDocument()
  })

  it('renders location text', () => {
    render(<ProjectsSection />)
    const locations = screen.getAllByText('San Francisco, California, USA')
    expect(locations.length).toBe(6)
  })
})
