import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('renders section heading', () => {
    render(<Sermons />)
    expect(screen.getByText('Listen Our Sermons')).toBeInTheDocument()
  })

  it('renders all three sermon titles', () => {
    render(<Sermons />)
    expect(screen.getByText('Arise, Shine')).toBeInTheDocument()
    expect(screen.getByText('Filled in Him')).toBeInTheDocument()
    expect(screen.getByText('Jehovah the Creator')).toBeInTheDocument()
  })

  it('renders pastor name and date', () => {
    render(<Sermons />)
    expect(screen.getAllByText(/Luis Matthew/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/March 28, 2018/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders play buttons', () => {
    render(<Sermons />)
    const playButtons = screen.getAllByRole('button', { name: /play/i })
    expect(playButtons).toHaveLength(3)
  })
})
