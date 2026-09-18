import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders Event Calendar heading', () => {
    render(<Events />)
    expect(screen.getByText('Event Calendar')).toBeInTheDocument()
  })

  it('renders 4 event cards', () => {
    render(<Events />)
    expect(screen.getAllByText('Nov')).toHaveLength(4)
  })

  it('renders event titles', () => {
    render(<Events />)
    expect(screen.getByText('New York Event')).toBeInTheDocument()
    expect(screen.getByText('Sydney Design Conference')).toBeInTheDocument()
    expect(screen.getByText('Madrid Design Conference')).toBeInTheDocument()
    expect(screen.getByText('Workshop and more')).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<Events />)
    const links = screen.getAllByText(/read more/i)
    expect(links).toHaveLength(4)
  })

  it('renders discover it button', () => {
    render(<Events />)
    expect(screen.getByText(/discover it/i)).toBeInTheDocument()
  })
})
