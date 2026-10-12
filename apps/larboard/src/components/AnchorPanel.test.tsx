import { render, screen } from '@testing-library/react'
import { HEADER_OFFSET, PANELS, type Panel } from '../lib/site'
import { AnchorPanel } from './AnchorPanel'

function panelAt(index: number): Panel {
  const panel = PANELS[index]

  if (!panel) {
    throw new Error(`PANELS lost item ${index}`)
  }

  return panel
}

describe('AnchorPanel', () => {
  it('is a real in-band target: its own id, its own heading, a stable header offset', () => {
    const { container } = render(<AnchorPanel panel={panelAt(0)} />)

    const section = container.querySelector('section') as HTMLElement

    expect(section).toHaveAttribute('id', 'home')
    expect(section).toHaveClass('scroll-mt-[7rem]')
    expect(section.getAttribute('aria-labelledby')).toBe('home-heading')
    expect(section.querySelector('h2')).toHaveAttribute('id', 'home-heading')
    expect(HEADER_OFFSET).toBe(112)
  })

  it('renders an eyebrow, a heading and one line of own copy over the image', () => {
    render(<AnchorPanel panel={panelAt(2)} />)

    expect(screen.getByText(panelAt(2).eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(panelAt(2).heading)
    expect(screen.getByText(panelAt(2).body)).toBeInTheDocument()
  })

  it('keeps the square shape language — no radius, no pill, no card shadow', () => {
    render(<AnchorPanel panel={panelAt(1)} />)

    const card = screen.getByTestId('panel-card')

    expect(card).toHaveClass('bg-black/45', 'border-brand', 'backdrop-blur-sm')
    expect(card.className).not.toMatch(/rounded|shadow/)
  })
})
