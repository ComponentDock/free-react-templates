import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the green band with the white uppercase heading', () => {
    render(<CtaBand />)
    const section = screen.getByLabelText('Call to action')
    expect(section.className).toMatch(/bg-primary/)
    const heading = screen.getByRole('heading', { level: 2, name: 'Try For Your Next Project' })
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/uppercase/)
  })

  it('shows an outline Contact Us button that inverts on hover', () => {
    render(<CtaBand />)
    const button = screen.getByRole('link', { name: 'Contact Us' })
    expect(button.className).toMatch(/border-2/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/hover:bg-white/)
    expect(button.className).toMatch(/hover:text-primary/)
  })
})
