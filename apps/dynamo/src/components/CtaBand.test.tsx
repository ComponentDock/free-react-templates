import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the white heading on the yellow band with a dark contact button', () => {
    render(<CtaBand />)
    expect(
      screen.getByRole('heading', { name: 'We produce or supply Goods, Services, or Sources' }),
    ).toBeInTheDocument()
    const button = screen.getByRole('link', { name: 'contact us' })
    expect(button).toHaveAttribute('href', '#contact')
    expect(button.getAttribute('class')).toContain('bg-navy-900')
  })
})
