import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LogoCta } from './LogoCta'
import { BRAND_NAME, LOGO_CTA_BUTTON_LABEL } from '../data'

describe('LogoCta', () => {
  it('shows the logo mark and two Learn More buttons', () => {
    render(<LogoCta />)
    expect(screen.getByRole('link', { name: BRAND_NAME })).toBeInTheDocument()
    const buttons = screen.getAllByRole('link', { name: new RegExp(LOGO_CTA_BUTTON_LABEL, 'i') })
    expect(buttons).toHaveLength(2)
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('href', '#contact')
    })
  })
})
