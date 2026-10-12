import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { TLDS, TldSelect } from './TldSelect'

describe('TldSelect', () => {
  it('renders the violet chip with three labelled options', () => {
    render(<TldSelect value=".io" onChange={vi.fn()} />)

    const select = screen.getByLabelText('Top-level domain')
    expect(select).toHaveValue('.io')
    expect(screen.getAllByRole('option')).toHaveLength(3)
    expect(TLDS).toEqual(['.io', '.com', '.net'])

    const chip = select.parentElement!
    expect(chip).toHaveClass('bg-plum-bright', 'h-[60px]', 'w-[141px]', 'rounded-r-[12px]')
  })

  it('reports the chosen top-level domain', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<TldSelect value=".io" onChange={onChange} />)

    await user.selectOptions(screen.getByLabelText('Top-level domain'), '.net')

    expect(onChange).toHaveBeenCalledWith('.net')
  })

  it('reflects the selected domain in the chip', () => {
    render(<TldSelect value=".com" onChange={vi.fn()} />)

    expect(screen.getByLabelText('Top-level domain')).toHaveValue('.com')
  })
})
