import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMMAND, CTA } from '../data/site'
import { ActionRow } from './ActionRow'

describe('ActionRow', () => {
  it('pairs the white CTA with the terminal chip in one row', () => {
    const { container } = render(<ActionRow />)

    const row = container.querySelector('.vg-actions')
    expect(row?.children).toHaveLength(2)

    const cta = screen.getByRole('link', { name: CTA.label })
    expect(cta).toHaveAttribute('href', CTA.href)
    expect(cta).toHaveAttribute('target', '_blank')
    expect(cta).toHaveAttribute('rel', 'noreferrer noopener')

    const chip = container.querySelector('.vg-cmd')
    expect(chip?.tagName).toBe('P')
  })

  it('keeps the $ prompt out of the accessible text of the command', () => {
    const { container } = render(<ActionRow />)

    const chip = container.querySelector('.vg-cmd')!
    expect(chip).toHaveTextContent(`$${COMMAND}`)
    expect(chip.querySelector('span[aria-hidden="true"]')).toHaveTextContent('$')
    expect(chip.querySelector('code')).toHaveTextContent(COMMAND)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
