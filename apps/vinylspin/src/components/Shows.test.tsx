import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Shows } from './Shows'

describe('Shows', () => {
  it('renders Upcoming Shows heading', () => {
    render(<Shows />)
    expect(screen.getByText('Upcoming Shows')).toBeInTheDocument()
  })

  it('renders Events subtitle', () => {
    render(<Shows />)
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders all show names', () => {
    render(<Shows />)
    const shows = [
      'Electric Castle Festival',
      'Ultra Music Festival',
      'Untold Festival',
      'Sun Kissed Festival',
      'Spanish Festival',
      'Vikings Festival',
    ]
    for (const name of shows) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders show dates', () => {
    render(<Shows />)
    expect(screen.getByText('18/07')).toBeInTheDocument()
    expect(screen.getByText('25/08')).toBeInTheDocument()
  })

  it('renders Buy Tickets buttons', () => {
    render(<Shows />)
    const buttons = screen.getAllByText('Buy Tickets')
    expect(buttons).toHaveLength(6)
  })

  it('Buy Tickets buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<Shows />)
    const buttons = screen.getAllByText('Buy Tickets')
    const first = buttons[0]
    expect(first).toBeDefined()
    await user.click(first!)
  })

  it('renders shows image', () => {
    render(<Shows />)
    expect(screen.getByAltText('Live show')).toBeInTheDocument()
  })
})
