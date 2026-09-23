import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { UserIcon } from './UserIcon'

describe('UserIcon', () => {
  it('renders a blue circle with a user silhouette icon', () => {
    render(<UserIcon />)
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('fill', 'currentColor')
  })

  it('applies the primary background color', () => {
    render(<UserIcon />)
    const container = document.querySelector('.rounded-full')
    expect(container).toHaveClass('bg-[var(--color-primary)]')
  })
})
