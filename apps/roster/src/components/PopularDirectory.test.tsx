import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularDirectory } from './PopularDirectory'

describe('PopularDirectory', () => {
  it('renders section heading', () => {
    render(<PopularDirectory />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Directory')
  })

  it('renders all directory cards', () => {
    render(<PopularDirectory />)
    expect(screen.getByText('Urban Bites')).toBeInTheDocument()
    expect(screen.getByText('The Garden Cafe')).toBeInTheDocument()
    expect(screen.getByText('Skyline Bar')).toBeInTheDocument()
    expect(screen.getByText('Fresh Market')).toBeInTheDocument()
    expect(screen.getByText('Noodle House')).toBeInTheDocument()
  })

  it('shows price badges and status', () => {
    render(<PopularDirectory />)
    expect(screen.getAllByText('$$$')).toHaveLength(1)
    expect(screen.getAllByText('Open')).toHaveLength(4)
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })

  it('has favorite buttons with aria-labels', async () => {
    const user = userEvent.setup()
    render(<PopularDirectory />)
    const favBtn = screen.getByRole('button', { name: /favorite urban bites/i })
    await user.click(favBtn)
    // Button should still be in the document after click
    expect(favBtn).toBeInTheDocument()
  })
})
