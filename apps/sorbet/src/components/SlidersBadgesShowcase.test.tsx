import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SlidersBadgesShowcase } from './SlidersBadgesShowcase'

describe('SlidersBadgesShowcase', () => {
  it('renders the two range sliders with the primary accent', () => {
    const { container } = render(<SlidersBadgesShowcase />)

    expect(container.querySelector('section')!.id).toBe('sliders')
    expect(screen.getByRole('heading', { level: 2, name: 'Sliders' })).toBeInTheDocument()
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]!).toHaveValue('70')
    expect(sliders[0]!.className).toContain('accent-primary-500')
  })

  it('moves a slider', async () => {
    render(<SlidersBadgesShowcase />)

    const slider = screen.getByLabelText('Slider two')
    await userEvent.click(slider)
    slider.setAttribute('value', '42')

    expect(slider).toHaveAttribute('value', '42')
    expect(screen.getByLabelText('Slider one')).toBeInTheDocument()
  })

  it('renders the six solid pill badges', () => {
    render(<SlidersBadgesShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Badges' })).toBeInTheDocument()
    expect(screen.getByText('Primary').className).toContain('bg-primary-500')
    expect(screen.getByText('Primary').className).toContain('text-heading')
    expect(screen.getByText('Info').className).toContain('bg-info')
    expect(screen.getByText('Success').className).toContain('bg-success')
    expect(screen.getByText('Warning').className).toContain('bg-warning')
    expect(screen.getByText('Danger').className).toContain('bg-danger')
    expect(screen.getByText('Rose').className).toContain('bg-rose')
  })
})
