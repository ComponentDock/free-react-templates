import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Results } from './Results'

describe('Results', () => {
  it('renders the heading and two comparison sliders', () => {
    render(<Results />)
    expect(screen.getByRole('heading', { level: 2, name: 'Visible Results' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Facial Treatment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Skin Rejuvenation' })).toBeInTheDocument()
    expect(screen.getAllByRole('slider')).toHaveLength(2)
    expect(screen.getByAltText('Facial Treatment before')).toBeInTheDocument()
    expect(screen.getByAltText('Facial Treatment after')).toBeInTheDocument()
  })

  it('updates the split position when the slider is dragged', () => {
    render(<Results />)
    const slider = screen.getByRole('slider', { name: 'Facial Treatment comparison position' })
    expect(slider).toHaveValue('50')

    fireEvent.change(slider, { target: { value: '70' } })
    expect(slider).toHaveValue('70')

    fireEvent.change(slider, { target: { value: '30' } })
    expect(slider).toHaveValue('30')
  })
})
