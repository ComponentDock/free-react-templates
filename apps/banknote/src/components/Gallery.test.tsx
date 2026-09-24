import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section title', () => {
    render(<Gallery />)
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Party' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Holidays' })).toBeInTheDocument()
  })

  it('filters gallery items when clicking a category', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Events' }))
    const images = screen.getAllByAltText('Gallery item')
    expect(images.length).toBe(4) // Events has 4 items
  })

  it('shows all items when All is selected', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'All' }))
    const images = screen.getAllByAltText('Gallery item')
    expect(images.length).toBe(12)
  })
})
