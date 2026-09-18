import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { History } from './History'

describe('History', () => {
  it('renders section title', () => {
    render(<History />)
    expect(screen.getByText('Glorious History')).toBeInTheDocument()
  })

  it('renders all three tabs', () => {
    render(<History />)
    expect(screen.getByRole('tab', { name: /history/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /mission/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /vision/i })).toBeInTheDocument()
  })

  it('shows History content by default', () => {
    render(<History />)
    // The content heading "History" appears in the h3 inside the tab panel
    const headings = screen.getAllByText('History')
    expect(headings.length).toBeGreaterThanOrEqual(2) // tab button + content heading
    expect(screen.getByText(/Few would argue that/)).toBeInTheDocument()
  })

  it('switches to Mission tab on click', async () => {
    const user = userEvent.setup()
    render(<History />)
    await user.click(screen.getByRole('tab', { name: /mission/i }))
    // Tab button shows Mission, content heading shows Mission
    const missionTexts = screen.getAllByText('Mission')
    expect(missionTexts.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/Our mission is to/)).toBeInTheDocument()
  })

  it('switches to Vision tab on click', async () => {
    const user = userEvent.setup()
    render(<History />)
    await user.click(screen.getByRole('tab', { name: /vision/i }))
    const visionTexts = screen.getAllByText('Vision')
    expect(visionTexts.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/We envision a world/)).toBeInTheDocument()
  })

  it('renders the side image', () => {
    render(<History />)
    const img = screen.getByAltText('History illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('lumina-tab'))
  })
})
