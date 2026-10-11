import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TooltipsShowcase } from './TooltipsShowcase'

describe('TooltipsShowcase', () => {
  it('renders the four directional triggers wired to their tooltips', () => {
    render(<TooltipsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Tooltips')

    const triggers = screen.getAllByRole('button', { name: /tooltip on/i })
    expect(triggers).toHaveLength(4)

    expect(triggers[0]).toHaveAttribute('aria-describedby', 'modkit-tooltip-top')
    expect(triggers[3]).toHaveAttribute('aria-describedby', 'modkit-tooltip-left')

    const tooltips = screen.getAllByRole('tooltip')
    expect(tooltips).toHaveLength(4)
    expect(tooltips[1]!.textContent).toBe('Tooltip on right')
    expect(tooltips[2]!.className).toContain('shadow-kit-tooltip')
    expect(tooltips[2]!.className).toContain('max-w-[200px]')
  })
})
