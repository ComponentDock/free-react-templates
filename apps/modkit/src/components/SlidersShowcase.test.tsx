import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SlidersShowcase } from './SlidersShowcase'

describe('SlidersShowcase', () => {
  it('renders native range inputs with the kit accent', () => {
    render(<SlidersShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Sliders')

    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveValue('50')
    expect(sliders[1]).toHaveValue('75')
    expect(sliders[0]!.className).toContain('accent-kit-primary')

    expect(screen.getByLabelText('Default range')).toHaveValue('50')
    expect(screen.getByLabelText('With steps')).toHaveValue('75')
  })

  it('updates the slider value when dragged', () => {
    render(<SlidersShowcase />)

    const slider = screen.getAllByRole('slider')[0]!

    fireEvent.change(slider, { target: { value: '80' } })

    expect(slider).toHaveValue('80')
  })
})
