import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders the fill at the given percentage', () => {
    const { container } = render(<ProgressBar percentage={83} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '83')
    const fill = container.querySelector('[data-fill]') as HTMLElement
    expect(fill.style.width).toBe('83%')
  })
})
