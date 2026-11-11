import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FIELD_LABEL, SCALE, SEATS_LABEL } from '../content'
import { SeatControls } from './SeatControls'

describe('SeatControls', () => {
  it('gives the visible label to the slider and the hidden one to the field', () => {
    render(
      <SeatControls seats={12} onSeatsChange={() => {}} fieldRef={{ current: null }} valueText="12 seats" />,
    )

    expect(screen.getByLabelText(SEATS_LABEL)).toHaveAttribute('type', 'range')
    expect(screen.getByLabelText(FIELD_LABEL)).toHaveAttribute('type', 'number')
  })

  it('clamps the native controls to the seat band', () => {
    render(
      <SeatControls seats={12} onSeatsChange={() => {}} fieldRef={{ current: null }} valueText="12 seats" />,
    )

    const field = screen.getByLabelText(FIELD_LABEL)
    expect(field).toHaveAttribute('min', '1')
    expect(field).toHaveAttribute('max', '200')
    expect(field).toHaveAttribute('step', '1')
    expect(field).toHaveAttribute('inputmode', 'numeric')
    expect(field).toHaveAttribute('aria-describedby', 'prorata-total')

    const slider = screen.getByLabelText(SEATS_LABEL)
    expect(slider).toHaveAttribute('aria-valuetext', '12 seats')
  })

  it('paints five decorative ticks that assistive technology skips', () => {
    const { container } = render(
      <SeatControls seats={12} onSeatsChange={() => {}} fieldRef={{ current: null }} valueText="12 seats" />,
    )

    const scale = container.querySelector('.pr-scale')
    expect(scale).toHaveAttribute('aria-hidden', 'true')
    expect([...(scale?.children ?? [])].map((tick) => tick.textContent)).toEqual(
      SCALE.map(String),
    )
  })
})
