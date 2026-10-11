import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Band, DemoPanel, GroupLabel } from './Band'

describe('Band', () => {
  it('renders the accent-bar heading, the lead copy, and its children', () => {
    const { container } = render(
      <Band id="sample" title="Alerts" lead="Contextual feedback messages.">
        <p>Demo row</p>
      </Band>,
    )

    const section = container.querySelector('section')!
    expect(section.id).toBe('sample')
    expect(section.className).toContain('py-28')

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Alerts')
    expect(heading.className).toContain('border-l-2')
    expect(heading.className).toContain('border-kit-primary')

    expect(screen.getByText('Contextual feedback messages.')).toBeInTheDocument()
    expect(screen.getByText('Demo row')).toBeInTheDocument()
  })

  it('merges extra section classes', () => {
    const { container } = render(
      <Band title="Badge" lead="Small count labels." className="bg-band">
        <span>child</span>
      </Band>,
    )

    expect(container.querySelector('section')!.className).toContain('bg-band')
  })
})

describe('DemoPanel', () => {
  it('wraps demos in a light-gray panel and accepts overrides', () => {
    const { container } = render(
      <DemoPanel className="space-y-3">
        <span>inner</span>
      </DemoPanel>,
    )

    const panel = container.firstElementChild!
    expect(panel.className).toContain('bg-band')
    expect(panel.className).toContain('space-y-3')
    expect(screen.getByText('inner')).toBeInTheDocument()
  })
})

describe('GroupLabel', () => {
  it('renders an h4 sub-group label with merged classes', () => {
    render(<GroupLabel className="mb-1">With Icon + Shadow</GroupLabel>)

    const label = screen.getByRole('heading', { level: 4, name: 'With Icon + Shadow' })
    expect(label.className).toContain('mb-1')
  })
})
