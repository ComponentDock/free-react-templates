import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  it('stacks the headline, countdown, form and attribution over the photo layer', () => {
    const { container } = render(<ComingSoon />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Coming Soon')
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('accepts a className override', () => {
    const { container } = render(<ComingSoon className="bg-black" />)

    expect(container.querySelector('main')).toHaveClass('bg-black')
  })
})
