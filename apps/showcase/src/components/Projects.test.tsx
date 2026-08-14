import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and six image tiles with hover overlays', () => {
    const { container } = render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Projects' })).toBeInTheDocument()
    const tiles = screen.getAllByRole('link')
    expect(tiles).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)
    expect(screen.getAllByText('Branding & Illustration Design')).toHaveLength(6)
    expect(screen.getAllByText('Web Design')).toHaveLength(6)
    // Overlay is hidden until hover/focus (opacity-0 → group-hover/focus).
    const overlay = container.querySelector('a span span')
    expect(overlay?.parentElement).toHaveClass('opacity-0', 'group-hover:opacity-90')
  })

  it('makes every tile keyboard-focusable', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    const first = screen.getAllByRole('link')[0]
    await user.tab()
    expect(first).toHaveFocus()
  })
})
