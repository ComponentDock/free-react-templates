import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('About CureNova')).toBeInTheDocument()
  })

  it('shows mission by default', () => {
    render(<About />)
    expect(screen.getByText(/To provide exceptional healthcare services/)).toBeInTheDocument()
  })

  it('has accordion buttons', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /our mission/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /our vision/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /why choose us/i })).toBeInTheDocument()
  })

  it('toggles panels on click', async () => {
    const user = userEvent.setup()
    render(<About />)

    // Mission is open by default
    expect(screen.getByText(/To provide exceptional healthcare services/)).toBeInTheDocument()

    // Click Vision to open it
    await user.click(screen.getByRole('button', { name: /our vision/i }))
    expect(screen.getByText(/To be the leading healthcare provider/)).toBeInTheDocument()

    // Mission should be closed
    expect(screen.queryByText(/To provide exceptional healthcare services/)).not.toBeInTheDocument()
  })

  it('can close all panels', async () => {
    const user = userEvent.setup()
    render(<About />)

    // Click Mission to close it (it was open by default)
    await user.click(screen.getByRole('button', { name: /our mission/i }))
    expect(screen.queryByText(/To provide exceptional healthcare services/)).not.toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About CureNova medical center')).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
