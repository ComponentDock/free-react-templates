import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders My Skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders all six skill cards', () => {
    render(<Skills />)
    const skills = ['CSS', 'HTML', 'jQuery', 'Photoshop', 'WordPress', 'SEO']
    skills.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders skill percentages', () => {
    render(<Skills />)
    expect(screen.getByText('95')).toBeInTheDocument()
    expect(screen.getByText('98')).toBeInTheDocument()
    expect(screen.getByText('68')).toBeInTheDocument()
    expect(screen.getByText('85')).toBeInTheDocument()
    expect(screen.getByText('90')).toBeInTheDocument()
    expect(screen.getByText('75')).toBeInTheDocument()
  })

  it('renders Skills subheading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })
})
