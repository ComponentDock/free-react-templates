import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RoomShowcase } from './RoomShowcase'

describe('RoomShowcase', () => {
  beforeEach(() => {
    // Mock scrollBy on HTMLDivElement prototype
    Element.prototype.scrollBy = vi.fn()
  })

  it('renders section heading', () => {
    render(<RoomShowcase />)
    expect(screen.getByText('Our Rooms')).toBeInTheDocument()
    expect(screen.getByText('Explore our rooms')).toBeInTheDocument()
  })

  it('renders room cards', () => {
    render(<RoomShowcase />)
    expect(screen.getByText('Ocean View Suite')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Garden Room')).toBeInTheDocument()
    expect(screen.getByText('Premier Sea Suite')).toBeInTheDocument()
    expect(screen.getByText('Family Comfort Room')).toBeInTheDocument()
  })

  it('renders room prices', () => {
    render(<RoomShowcase />)
    expect(screen.getByText('$299/night')).toBeInTheDocument()
    expect(screen.getByText('$199/night')).toBeInTheDocument()
    expect(screen.getByText('$349/night')).toBeInTheDocument()
    expect(screen.getByText('$249/night')).toBeInTheDocument()
  })

  it('has scroll navigation buttons', () => {
    render(<RoomShowcase />)
    expect(screen.getByLabelText('Scroll left')).toBeInTheDocument()
    expect(screen.getByLabelText('Scroll right')).toBeInTheDocument()
  })

  it('scrolls left when left button clicked', async () => {
    const user = userEvent.setup()
    render(<RoomShowcase />)
    await user.click(screen.getByLabelText('Scroll left'))
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })

  it('scrolls right when right button clicked', async () => {
    const user = userEvent.setup()
    render(<RoomShowcase />)
    await user.click(screen.getByLabelText('Scroll right'))
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })
})
