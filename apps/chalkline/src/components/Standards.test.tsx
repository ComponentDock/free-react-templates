import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Standards } from './Standards'
import { standardsGroups } from '../data'

const allRows: ReadonlyArray<{ code: string; name: string; status: string }> = standardsGroups.flatMap(
  (group) => [...group.rows],
)

describe('Standards', () => {
  it('lists fourteen standards in three labelled groups', () => {
    render(<Standards />)

    expect(allRows).toHaveLength(14)
    standardsGroups.forEach((group) => {
      expect(screen.getByRole('heading', { level: 3, name: group.name })).toBeInTheDocument()
    })
  })

  it('renders every code, name and description', () => {
    render(<Standards />)

    allRows.forEach((row) => {
      expect(screen.getByText(row.code)).toBeInTheDocument()
      expect(screen.getByText(row.name)).toBeInTheDocument()
    })
  })

  it('counts the chips five certified, seven supported, one partial, one roadmap', () => {
    render(<Standards />)

    expect(screen.getAllByText('Certified')).toHaveLength(5)
    expect(screen.getAllByText('Supported')).toHaveLength(7)
    expect(screen.getAllByText('Partial')).toHaveLength(1)
    expect(screen.getAllByText('On the roadmap')).toHaveLength(1)
  })

  it('gives each status its own colourway', () => {
    render(<Standards />)

    expect(screen.getAllByText('Certified')[0]).toHaveClass('bg-primary-100')
    expect(screen.getAllByText('Supported')[0]).toHaveClass('bg-primary-50')
    expect(screen.getAllByText('Partial')[0]).toHaveClass('bg-accent-100')
    expect(screen.getAllByText('On the roadmap')[0]).toHaveClass('bg-gray-100')
  })

  it('closes on the ask-us footnote', () => {
    render(<Standards />)

    const note = screen.getByText(/If a standard matters to your tender/)
    expect(note).toBeInTheDocument()
    expect(within(note.closest('section')!).getByText('VPAT 2.5')).toBeInTheDocument()
  })
})
