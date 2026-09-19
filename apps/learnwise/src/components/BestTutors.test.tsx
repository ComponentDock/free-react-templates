import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BestTutors } from './BestTutors'

describe('BestTutors', () => {
  beforeEach(() => {
    // jsdom doesn't have scrollBy on elements — mock it
    HTMLDivElement.prototype.scrollBy = vi.fn()
  })

  it('renders the section heading', () => {
    render(<BestTutors />)
    expect(screen.getByRole('heading', { name: 'The Best Tutors in Town' })).toBeInTheDocument()
  })

  it('renders tutor names', () => {
    render(<BestTutors />)
    expect(screen.getByText('Alex Parker')).toBeInTheDocument()
    expect(screen.getByText('Maria Johnson')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Sophie Chen')).toBeInTheDocument()
    expect(screen.getByText('David Brown')).toBeInTheDocument()
  })

  it('calls scrollBy when navigation buttons are clicked', async () => {
    const user = userEvent.setup()
    render(<BestTutors />)
    const prevBtn = screen.getByRole('button', { name: 'Previous tutor' })
    const nextBtn = screen.getByRole('button', { name: 'Next tutor' })
    await user.click(prevBtn)
    expect(HTMLDivElement.prototype.scrollBy).toHaveBeenCalledWith(
      expect.objectContaining({ left: expect.any(Number), behavior: 'smooth' }),
    )
    await user.click(nextBtn)
    expect(HTMLDivElement.prototype.scrollBy).toHaveBeenCalledTimes(2)
  })

  it('renders social links for each tutor', () => {
    render(<BestTutors />)
    // 5 tutors x 3 social icons = 15 social links
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(5)
  })
})
