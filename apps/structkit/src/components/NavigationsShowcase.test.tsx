import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NavigationsShowcase } from './NavigationsShowcase'

describe('NavigationsShowcase', () => {
  it('renders every coloured navigation variant with its current link', () => {
    render(<NavigationsShowcase />)

    for (const label of [
      'Primary Color',
      'Success Color',
      'Info Color',
      'Danger Color',
      'Dark Color',
      'Background image',
    ]) {
      expect(screen.getAllByRole('heading', { level: 3, name: label }).length).toBeGreaterThan(0)
    }

    expect(screen.getByRole('link', { name: /Home \(current\)/ })).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(7)
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThan(0)
  })

  it('opens an inline dropdown and a header dropdown', async () => {
    const user = userEvent.setup()
    render(<NavigationsShowcase />)

    const triggers = screen.getAllByRole('button', { name: /Dropdown/ })
    expect(triggers.length).toBeGreaterThanOrEqual(6)

    const inline = triggers[0]!
    await user.click(inline)
    expect(inline).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Action' }).length).toBeGreaterThan(0)
    await user.click(inline)
    expect(inline).toHaveAttribute('aria-expanded', 'false')

    const header = triggers[3]!
    await user.click(header)
    expect(header).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText('Separated link').length).toBeGreaterThan(0)
  })
})
