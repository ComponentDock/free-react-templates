import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Migration } from './Migration'
import { migration } from '../data'

describe('Migration', () => {
  it('renders the nine comparison rows against three vendors', () => {
    render(<Migration />)

    const headers = screen.getAllByRole('columnheader').map((node) => node.textContent)
    expect(headers).toEqual(['Item', 'Moodle', 'Canvas', 'Blackboard'])

    migration.rows.forEach((row) => {
      expect(screen.getByRole('rowheader', { name: row.item })).toBeInTheDocument()
    })
    expect(screen.getAllByRole('row')).toHaveLength(migration.rows.length + 1)
  })

  it('marks rebuild cells in the accent colour', () => {
    render(<Migration />)

    const rebuild = screen.getAllByText('Rebuild')[0]!
    expect(rebuild).toHaveClass('text-accent-600')
    expect(screen.getAllByText('Automatic')[0]).toHaveClass('text-gray-600')
  })

  it('defines the three words in the legend', () => {
    render(<Migration />)

    expect(screen.getByText(migration.legend)).toBeInTheDocument()
  })

  it('orders the four stages in an ordered list', () => {
    const { container } = render(<Migration />)

    const list = container.querySelector('ol')!
    expect(list).not.toBeNull()
    expect(within(list).getAllByRole('listitem')).toHaveLength(4)

    migration.stages.forEach((stage) => {
      expect(screen.getByText(stage.stage)).toBeInTheDocument()
      expect(screen.getByText(stage.duration)).toBeInTheDocument()
      expect(screen.getByText(stage.owner)).toBeInTheDocument()
    })
  })

  it('closes on the median-time footnote', () => {
    render(<Migration />)

    expect(screen.getByText(migration.footnote)).toBeInTheDocument()
  })
})
