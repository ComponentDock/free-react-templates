import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopStrip } from './TopStrip'

describe('TopStrip', () => {
  it('shows the social links and contact info', () => {
    render(<TopStrip />)

    for (const name of ['facebook', 'twitter', 'dribbble', 'behance']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: '012-6532-568-9746' })).toHaveAttribute(
      'href',
      'tel:01265325689746',
    )
    expect(screen.getByRole('link', { name: 'emergency@cargomate.io' })).toHaveAttribute(
      'href',
      'mailto:emergency@cargomate.io',
    )
  })

  it('is hidden below the desktop breakpoint', () => {
    const { container } = render(<TopStrip />)
    expect(container.firstElementChild).toHaveClass('hidden', 'lg:block')
  })
})
