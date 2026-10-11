import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SlidersShowcase } from './SlidersShowcase'

describe('SlidersShowcase', () => {
  it('renders range sliders styled with the kit accent', () => {
    const { container } = render(<SlidersShowcase />)

    expect(container.querySelector('section')!.id).toBe('sliders')
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveValue('70')
    expect(sliders[0]!.className).toContain('accent-primary-600')
    expect(screen.getByLabelText('Value')).toBeInTheDocument()
    expect(screen.getByLabelText('Range')).toBeInTheDocument()
  })

  it('accepts a dragged value', () => {
    render(<SlidersShowcase />)

    const [slider] = screen.getAllByRole('slider')
    fireEvent.change(slider!, { target: { value: '25' } })

    expect(slider).toHaveValue('25')
  })
})
