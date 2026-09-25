import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('My services')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Services />)
    expect(screen.getByText('What I can do for you')).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('User experience design')).toBeInTheDocument()
    expect(screen.getByText('Digital art')).toBeInTheDocument()
    expect(screen.getByText('Social media marketing')).toBeInTheDocument()
  })

  it('renders "learn more" links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('learn more')
    expect(links).toHaveLength(3)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Crafting intuitive, user-centered experiences/)).toBeInTheDocument()
    expect(screen.getByText(/Creating stunning visual compositions/)).toBeInTheDocument()
    expect(screen.getByText(/Strategic campaigns that amplify/)).toBeInTheDocument()
  })

  it('has the services section id', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'services')
  })
})
