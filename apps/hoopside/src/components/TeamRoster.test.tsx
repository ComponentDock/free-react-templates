import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamRoster } from './TeamRoster'

describe('TeamRoster', () => {
  it('renders the section heading', () => {
    render(<TeamRoster />)
    expect(screen.getByText('First Team')).toBeInTheDocument()
  })

  it('renders all player names', () => {
    render(<TeamRoster />)
    expect(screen.getByText('Grace Osborne')).toBeInTheDocument()
    expect(screen.getByText('Frances Matthews')).toBeInTheDocument()
    expect(screen.getByText('Florence Munoz')).toBeInTheDocument()
    expect(screen.getByText('Victoria Lawrence')).toBeInTheDocument()
  })

  it('renders player positions', () => {
    render(<TeamRoster />)
    expect(screen.getByText('Center')).toBeInTheDocument()
    expect(screen.getByText('Point Guard')).toBeInTheDocument()
    expect(screen.getByText('Shooting Guard')).toBeInTheDocument()
    expect(screen.getByText('Power Forward')).toBeInTheDocument()
  })

  it('renders player jersey numbers', () => {
    render(<TeamRoster />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('83')).toBeInTheDocument()
    expect(screen.getByText('36')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('renders Join Our Team button', () => {
    render(<TeamRoster />)
    expect(screen.getByText('Join Our Team')).toBeInTheDocument()
  })
})
