import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'
import { CTA_BUTTON_LABEL, CTA_TITLE } from '../data'

describe('CtaBand', () => {
  it('renders the heading and Become a Volunteer button over a photo band', () => {
    const { container } = render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(CTA_TITLE) }),
    ).toBeInTheDocument()

    const button = screen.getByRole('link', { name: CTA_BUTTON_LABEL })
    expect(button).toHaveAttribute('href', '#contact')
    expect(button.className).toContain('bg-white')

    const section = container.querySelector('section')
    expect(section?.getAttribute('style')).toContain('caritas-cta')
    expect(container.querySelector('[aria-hidden="true"]')?.className).toContain('opacity-70')
  })
})
