import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Guests } from './Guests'

describe('Guests', () => {
  it('renders the section heading', () => {
    render(<Guests />)
    expect(screen.getByText('Featured Guests')).toBeInTheDocument()
  })

  it('renders the section subtitle', () => {
    render(<Guests />)
    expect(screen.getByText(/Meet the incredible minds/)).toBeInTheDocument()
  })

  it('renders all four guest names', () => {
    render(<Guests />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByText('Priya Patel')).toBeInTheDocument()
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument()
  })

  it('renders all guest roles', () => {
    render(<Guests />)
    expect(screen.getByText('CTO at TechVault')).toBeInTheDocument()
    expect(screen.getByText('Founder of GreenCode')).toBeInTheDocument()
    expect(screen.getByText('Design Lead at Figma')).toBeInTheDocument()
    expect(screen.getByText('Security Architect')).toBeInTheDocument()
  })

  it('renders all guest bios', () => {
    render(<Guests />)
    expect(screen.getByText(/Leading innovation in cloud/)).toBeInTheDocument()
    expect(screen.getByText(/Building sustainable technology/)).toBeInTheDocument()
    expect(screen.getByText(/Crafting intuitive user experiences/)).toBeInTheDocument()
    expect(screen.getByText(/Protecting digital assets/)).toBeInTheDocument()
  })

  it('renders guest images with correct alt text', () => {
    render(<Guests />)
    expect(screen.getByAltText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByAltText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('Priya Patel')).toBeInTheDocument()
    expect(screen.getByAltText('Alex Rivera')).toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<Guests />)
    expect(screen.getByLabelText('Featured guests')).toBeInTheDocument()
  })

  it('renders four guest cards', () => {
    render(<Guests />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })
})
