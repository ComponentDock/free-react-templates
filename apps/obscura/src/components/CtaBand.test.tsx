import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('shows the white uppercase heading with a thin white underline', () => {
    render(<CtaBand />)
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Need a photographer? Get in touch',
    })
    expect(heading).toHaveClass('uppercase')
    expect(heading).toHaveClass('border-b')
    expect(heading).toHaveClass('border-white')
    expect(heading).toHaveClass('text-white')
  })

  it('shows an outline Read More button', () => {
    render(<CtaBand />)
    const button = screen.getByRole('link', { name: 'Read More' })
    expect(button).toHaveClass('uppercase')
    expect(button.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(4)
  })
})
