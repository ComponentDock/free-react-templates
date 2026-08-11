import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { actionBarItems } from '../data'
import { ActionBar } from './ActionBar'

describe('ActionBar', () => {
  it('renders an icon button for every action with an accessible name', () => {
    render(<ActionBar />)
    const bar = screen.getByRole('complementary', { name: 'Quick actions' })
    for (const item of actionBarItems) {
      expect(within(bar).getByRole('button', { name: item.label })).toBeInTheDocument()
    }
  })

  it('is hidden on small screens', () => {
    const { container } = render(<ActionBar />)
    expect(container.firstElementChild).toHaveClass('hidden', 'lg:flex')
  })
})
