import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewDirectory } from './NewDirectory'

describe('NewDirectory', () => {
  it('renders section heading', () => {
    render(<NewDirectory />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('New Directory')
  })

  it('renders all new directory cards', () => {
    render(<NewDirectory />)
    expect(screen.getByText('Sakura Lounge')).toBeInTheDocument()
    expect(screen.getByText('Artisan Deli')).toBeInTheDocument()
    expect(screen.getByText('Brew & Co')).toBeInTheDocument()
    expect(screen.getByText('Green Leaf Spa')).toBeInTheDocument()
    expect(screen.getByText('The Book Nook')).toBeInTheDocument()
  })

  it('shows price badges and status', () => {
    render(<NewDirectory />)
    expect(screen.getAllByText('Open')).toHaveLength(4)
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })

  it('has favorite buttons', async () => {
    const user = userEvent.setup()
    render(<NewDirectory />)
    const favBtn = screen.getByRole('button', { name: /favorite sakura lounge/i })
    await user.click(favBtn)
    expect(favBtn).toBeInTheDocument()
  })
})
