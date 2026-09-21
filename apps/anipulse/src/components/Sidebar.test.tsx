import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import { SIDEBAR_SHOWS, SIDEBAR_WEEKLY } from '../data'

describe('Sidebar', () => {
  it('renders the Top Views heading', () => {
    render(<Sidebar />)
    expect(screen.getByText('Top Views')).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Sidebar />)
    expect(screen.getByRole('tab', { name: 'Day' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Week' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Month' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Years' })).toBeInTheDocument()
  })

  it('defaults to Day tab selected', () => {
    render(<Sidebar />)
    expect(screen.getByRole('tab', { name: 'Day' })).toHaveAttribute('aria-selected', 'true')
  })

  it('shows Day shows by default', () => {
    render(<Sidebar />)
    for (const show of SIDEBAR_SHOWS) {
      expect(screen.getByText(show.title)).toBeInTheDocument()
    }
  })

  it('switches to Week tab on click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    await user.click(screen.getByRole('tab', { name: 'Week' }))
    expect(screen.getByRole('tab', { name: 'Week' })).toHaveAttribute('aria-selected', 'true')
    for (const show of SIDEBAR_WEEKLY) {
      expect(screen.getByText(show.title)).toBeInTheDocument()
    }
  })

  it('renders show thumbnails', () => {
    render(<Sidebar />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('renders rank numbers', () => {
    render(<Sidebar />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})
