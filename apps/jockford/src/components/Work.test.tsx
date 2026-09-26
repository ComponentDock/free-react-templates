import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Work } from './Work'

describe('Work', () => {
  it('renders the heading', () => {
    render(<Work />)
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Work />)
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Software')).toBeInTheDocument()
    expect(screen.getByText('Apps')).toBeInTheDocument()
  })

  it('shows all items by default', () => {
    render(<Work />)
    expect(screen.getByText('Work 01')).toBeInTheDocument()
    expect(screen.getByText('Work 02')).toBeInTheDocument()
    expect(screen.getByText('Work 06')).toBeInTheDocument()
  })

  it('filters items by category', async () => {
    const user = userEvent.setup()
    render(<Work />)
    await user.click(screen.getByText('Software'))
    expect(screen.getByText('Work 03')).toBeInTheDocument()
    expect(screen.queryByText('Work 01')).not.toBeInTheDocument()
  })

  it('shows all items when "All" is selected', async () => {
    const user = userEvent.setup()
    render(<Work />)
    await user.click(screen.getByText('Software'))
    await user.click(screen.getByText('All'))
    expect(screen.getByText('Work 01')).toBeInTheDocument()
    expect(screen.getByText('Work 03')).toBeInTheDocument()
  })

  it('renders action buttons on portfolio items', () => {
    render(<Work />)
    const shareButtons = screen.getAllByLabelText(/Share Work/)
    expect(shareButtons.length).toBe(6)
    const viewButtons = screen.getAllByLabelText(/View Work/)
    expect(viewButtons.length).toBe(6)
    const likeButtons = screen.getAllByLabelText(/Like Work/)
    expect(likeButtons.length).toBe(6)
  })
})
