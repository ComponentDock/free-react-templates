import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders team heading and 4 member cards', () => {
    render(<Team />)
    expect(screen.getByText('Professional Creative Team Members')).toBeInTheDocument()
    expect(screen.getByText('Lloyd Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Liam Neil')).toBeInTheDocument()
    expect(screen.getByText('Alen Broke')).toBeInTheDocument()
  })

  it('renders member positions', () => {
    render(<Team />)
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
    expect(screen.getByText('Web Designer')).toBeInTheDocument()
    expect(screen.getByText('Graphic Designer')).toBeInTheDocument()
    expect(screen.getByText('System Analyst')).toBeInTheDocument()
  })

  it('renders View All Members link', () => {
    render(<Team />)
    expect(screen.getByText('View All Members')).toHaveAttribute('href', '#')
  })

  it('renders member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })
})
