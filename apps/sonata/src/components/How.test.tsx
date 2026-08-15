import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { How } from './How'

describe('How', () => {
  it('renders the section heading and three steps with circular icons', () => {
    const { container } = render(<How />)

    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument()

    for (const title of ['Create an account', 'Choose a plan', 'Download Music']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }

    const iconCircles = container.querySelectorAll('.rounded-full.bg-brand')
    expect(iconCircles).toHaveLength(3)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
