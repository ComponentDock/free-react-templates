import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders section heading', () => {
    render(<Experience />)
    expect(screen.getByText('Work Experience')).toBeDefined()
  })

  it('renders all experience entries', () => {
    render(<Experience />)
    expect(screen.getByText('Full Stack Developer')).toBeDefined()
    expect(screen.getByText('Front End Developer at Google Company')).toBeDefined()
    expect(screen.getByText('System Analyst')).toBeDefined()
    expect(screen.getByText('Creative Designer')).toBeDefined()
    expect(screen.getByText('UI/UX Designer at Envato')).toBeDefined()
  })

  it('renders experience label', () => {
    render(<Experience />)
    expect(screen.getByText('Experience')).toBeDefined()
  })

  it('renders period for each entry', () => {
    render(<Experience />)
    const periods = screen.getAllByText('2028-2030')
    expect(periods).toHaveLength(5)
  })
})
