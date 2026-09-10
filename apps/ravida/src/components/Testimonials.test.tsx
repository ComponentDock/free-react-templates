import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section title and subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what they said/i })).toBeInTheDocument()
  })

  it('displays first review quote and name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/good lights it very to above/i)).toBeInTheDocument()
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
  })

  it('navigates to next review', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next review/i }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to previous review', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous review/i }))
    expect(screen.getByText('David Parker')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Navigate to last: click prev once (goes from 0 to 2)
    await user.click(screen.getByRole('button', { name: /previous review/i }))
    expect(screen.getByText('David Parker')).toBeInTheDocument()
    // Now click next — should wrap to first (Mosan Cameron)
    await user.click(screen.getByRole('button', { name: /next review/i }))
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
  })

  it('wraps from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At first (index 0), click prev — should wrap to last
    await user.click(screen.getByRole('button', { name: /previous review/i }))
    expect(screen.getByText('David Parker')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: /previous review/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next review/i })).toBeInTheDocument()
  })

  it('displays client image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Mosan Cameron')).toBeInTheDocument()
  })
})
