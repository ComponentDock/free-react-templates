import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ClosingCta } from './ClosingCta'
import { CLOSING_HEADING, PHONE_HREF } from '../content'

describe('ClosingCta', () => {
  it('asks the question on the deep red band with no eyebrow above it', () => {
    const { container } = render(<ClosingCta />)
    expect(screen.getByRole('heading', { level: 2, name: CLOSING_HEADING })).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveClass('bg-primary-700')
    expect(container.querySelector('.uppercase')).toBeNull()
  })

  it('offers the white call control and the outlined jump back to the windows', () => {
    render(<ClosingCta />)
    const call = screen.getByRole('link', { name: /Call \(555\) 060-0600/ })
    expect(call).toHaveAttribute('href', PHONE_HREF)
    expect(call).toHaveClass('bg-white', 'text-primary-700', 'rounded-lg')

    const ghost = screen.getByRole('link', { name: 'See the arrival windows' })
    expect(ghost).toHaveAttribute('href', '#response')
    expect(ghost).toHaveClass('border-2', 'border-white/40')
  })
})
