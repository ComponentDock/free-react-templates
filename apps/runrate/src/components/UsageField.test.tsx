import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { UsageField } from './UsageField'

const props = {
  id: 'runrate-calls',
  label: 'API calls per month',
  hint: 'First 100,000 API calls are free, then $1.00 per 100,000.',
  step: 4,
  max: 10,
  pill: '1M',
  valueText: '1,000,000 requests',
  fill: '40%',
  onStep: () => {},
}

describe('UsageField', () => {
  it('labels the slider and prints the compact pill beside it', () => {
    render(<UsageField {...props} />)

    const slider = screen.getByRole('slider', { name: props.label })
    expect(slider).toHaveAttribute('id', 'runrate-calls')
    expect(slider).toHaveAttribute('type', 'range')
    expect(screen.getByText('1M')).toHaveClass('rr-value')
  })

  it('walks its steps by index, from zero to the table maximum', () => {
    render(<UsageField {...props} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('min', '0')
    expect(slider).toHaveAttribute('max', '10')
    expect(slider).toHaveAttribute('step', '1')
    expect(slider).toHaveValue('4')
  })

  it('describes itself with the hint and speaks the human amount', () => {
    render(<UsageField {...props} />)

    const slider = screen.getByRole('slider')
    expect(slider).toHaveAttribute('aria-valuetext', '1,000,000 requests')
    expect(slider).toHaveAttribute('aria-describedby', 'runrate-calls-hint')
    expect(document.getElementById('runrate-calls-hint')).toHaveTextContent(props.hint)
  })

  it('writes the track fill inline, where the pseudo-element can read it', () => {
    const { container } = render(<UsageField {...props} />)

    const slider = screen.getByRole('slider')
    expect(slider.style.getPropertyValue('--fill')).toBe('40%')
    expect(container.querySelector('.rr-field')).toContainElement(slider as HTMLElement)
  })

  it('reports the step as a number, not the input string', () => {
    const onStep = vi.fn()
    render(<UsageField {...props} onStep={onStep} />)

    fireEvent.change(screen.getByRole('slider'), { target: { value: '7' } })

    expect(onStep).toHaveBeenCalledWith(7)
    expect(onStep).toHaveBeenCalledTimes(1)
  })
})
