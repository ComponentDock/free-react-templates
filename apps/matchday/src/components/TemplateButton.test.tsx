import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { TemplateButton } from './TemplateButton'

describe('TemplateButton', () => {
  it('renders a brand-orange link with an expanding navy bar', () => {
    render(
      <TemplateButton href="#results" variant="brand">
        See More Info
      </TemplateButton>,
    )
    const link = screen.getByRole('link', { name: 'See More Info' })
    expect(link).toHaveAttribute('href', '#results')
    expect(link).toHaveClass('bg-brand')
    const bar = link.querySelector('span[aria-hidden="true"]')
    expect(bar).toHaveClass('bg-navy')
  })

  it('renders a navy variant whose bar fills white on hover', () => {
    render(
      <TemplateButton href="#contact" variant="navy">
        See More Info
      </TemplateButton>,
    )
    const link = screen.getByRole('link', { name: 'See More Info' })
    expect(link).toHaveClass('bg-navy')
    expect(link.querySelector('span[aria-hidden="true"]')).toHaveClass('bg-white')
  })

  it('is keyboard-focusable', async () => {
    const user = userEvent.setup()
    render(<TemplateButton href="#news">Read the news</TemplateButton>)
    await user.tab()
    expect(screen.getByRole('link', { name: 'Read the news' })).toHaveFocus()
  })
})
