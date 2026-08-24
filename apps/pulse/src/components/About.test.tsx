import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the main heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /We have experience for your project/i }),
    ).toBeInTheDocument()
  })

  it('renders feature blocks', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Strategy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Development' })).toBeInTheDocument()
  })

  it('renders skill progress bars with correct percentages', () => {
    render(<About />)
    expect(screen.getAllByText('Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('70%')).toBeInTheDocument()
    expect(screen.getAllByText('Branding').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getAllByText('Marketing').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('renders the expertise heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Our Expertise' })).toBeInTheDocument()
  })
})
