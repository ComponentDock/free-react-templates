import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByText('What I do')).toBeInTheDocument()
    expect(screen.getByText('My services')).toBeInTheDocument()
  })

  it('renders 3 service cards with items', () => {
    render(<Services />)
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Product Strategy')).toBeInTheDocument()
    expect(screen.getByText('HTML/CSS')).toBeInTheDocument()
  })

  it('renders all service sub-items', () => {
    render(<Services />)
    expect(screen.getByText('Mobile App Design')).toBeInTheDocument()
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
    expect(screen.getByText('Design Sprints')).toBeInTheDocument()
    expect(screen.getByText('UX Strategy')).toBeInTheDocument()
    expect(screen.getByText('Prototyping')).toBeInTheDocument()
    expect(screen.getByText('User Testing')).toBeInTheDocument()
  })
})
