import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BeforeAfter } from './BeforeAfter'

describe('BeforeAfter', () => {
  it('renders the heading and both comparison cards', () => {
    render(<BeforeAfter />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'See the Difference' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kitchen Deep Clean' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bathroom Restoration' })).toBeInTheDocument()
    expect(screen.getAllByText('Before')).toHaveLength(2)
    expect(screen.getAllByText('After')).toHaveLength(2)
    expect(screen.getAllByText('Drag to compare')).toHaveLength(2)
  })

  it('shows the after image with a before overlay', () => {
    render(<BeforeAfter />)

    const slider = screen.getByRole('slider', { name: 'Kitchen Deep Clean comparison slider' })
    expect(slider).toHaveValue('50')
  })

  it('moves the comparison divider when the slider changes', () => {
    render(<BeforeAfter />)

    const slider = screen.getByRole('slider', { name: 'Kitchen Deep Clean comparison slider' })
    fireEvent.change(slider, { target: { value: '25' } })
    expect(slider).toHaveValue('25')
  })
})
