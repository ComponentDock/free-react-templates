import { describe, expect, it } from 'vitest'
import { rangeFill } from './range'

describe('rangeFill', () => {
  it('positions the five forecast days inside the fixed 12–28 °C window', () => {
    expect(rangeFill(16, 25)).toEqual({ left: '25%', width: '56.25%' })
    expect(rangeFill(15, 21)).toEqual({ left: '18.75%', width: '37.5%' })
    expect(rangeFill(14, 19)).toEqual({ left: '12.5%', width: '31.25%' })
    expect(rangeFill(15, 22)).toEqual({ left: '18.75%', width: '43.75%' })
    expect(rangeFill(17, 27)).toEqual({ left: '31.25%', width: '62.5%' })
  })

  it('clamps a low below the window and a high above it', () => {
    expect(rangeFill(-5, 25)).toEqual({ left: '0%', width: '81.25%' })
    expect(rangeFill(16, 40)).toEqual({ left: '25%', width: '75%' })
    expect(rangeFill(-40, 40)).toEqual({ left: '0%', width: '100%' })
  })

  it('collapses a single-degree day to a zero-width fill', () => {
    expect(rangeFill(20, 20)).toEqual({ left: '50%', width: '0%' })
    expect(rangeFill(20, 15)).toEqual({ left: '50%', width: '0%' })
  })

  it('keeps the window endpoints exact', () => {
    expect(rangeFill(12, 28)).toEqual({ left: '0%', width: '100%' })
  })
})
