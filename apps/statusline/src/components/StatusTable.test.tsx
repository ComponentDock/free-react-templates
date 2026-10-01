import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StatusTable } from './StatusTable'

describe('StatusTable', () => {
  it('renders one bordered table inside a horizontal-scroll wrapper', () => {
    render(<StatusTable />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('text-ink')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    expect(table.className).toContain('mb-4')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
  })

  it('renders five header cells with only the middle three labeled with scope', () => {
    render(<StatusTable />)
    const table = screen.getByRole('table')
    const headers = within(table).getAllByRole('columnheader')
    expect(headers.map((cell) => cell.textContent)).toEqual(['', 'Email', 'Username', 'Status', ''])
    expect(headers[0]).not.toHaveAttribute('scope')
    expect(headers[1]).toHaveAttribute('scope', 'col')
    expect(headers[2]).toHaveAttribute('scope', 'col')
    expect(headers[3]).toHaveAttribute('scope', 'col')
    expect(headers[4]).not.toHaveAttribute('scope')
    for (const cell of headers) {
      expect(cell.className).toContain('text-[13px]')
      expect(cell.className).toContain('font-medium')
      expect(cell.className).toContain('text-body-ink')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('align-bottom')
      expect(cell.className).toContain('border-none')
      expect(cell.className).toContain('text-left')
    }
  })

  it('renders the white header row with the 4px lavender underline', () => {
    render(<StatusTable />)
    const headerRow = screen.getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('bg-white')
    expect(headerRow.className).toContain('border-b-4')
    expect(headerRow.className).toContain('border-line')
  })

  it('renders five body rows with the canonical member data', () => {
    render(<StatusTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(5)
    expect(screen.getAllByText(/@email\.com/)).toHaveLength(5)
    expect(screen.getAllByText('Added: 01/03/2020')).toHaveLength(5)
    expect(screen.getByText('Markotto89')).toBeInTheDocument()
    expect(screen.getByText('Jacobthornton')).toBeInTheDocument()
    expect(screen.getByText('Larry_bird')).toBeInTheDocument()
    expect(screen.getByText('Johndoe1990')).toBeInTheDocument()
    expect(screen.getByText('Garybird_2020')).toBeInTheDocument()
    expect(screen.getAllByText('Active')).toHaveLength(3)
    expect(screen.getAllByText('Waiting for Resassignment')).toHaveLength(2)
  })

  it('renders body rows as white bands with page-colored separators', () => {
    render(<StatusTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row.className).toContain('mb-[10px]')
      expect(row.className).toContain('border-b-4')
      expect(row.className).toContain('border-page')
      expect(row.className).toContain('last:border-b-0')
    }
    const cells = within(table).getAllByRole('cell')
    for (const cell of cells) {
      expect(cell.className).toContain('bg-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('text-[14px]')
      expect(cell.className).toContain('align-middle')
      expect(cell.className).toContain('border-none')
    }
  })

  it('defaults row 1 checkbox to checked and rows 2–5 to unchecked', () => {
    render(<StatusTable />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5)
    expect(checkboxes[0]).toBeChecked()
    for (const box of checkboxes.slice(1)) {
      expect(box).not.toBeChecked()
    }
  })

  it('renders five picsum avatar seeds in the user cells', () => {
    const { container } = render(<StatusTable />)
    const avatars = Array.from(
      container.querySelectorAll('[aria-hidden="true"].rounded-full.bg-cover'),
    )
    expect(avatars).toHaveLength(5)
    avatars.forEach((avatar, index) => {
      expect((avatar as HTMLElement).style.backgroundImage).toContain(
        `picsum.photos/seed/statusline-${index + 1}/100/100`,
      )
    })
  })

  it('toggles a row checkbox via React state', async () => {
    const user = userEvent.setup()
    render(<StatusTable />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select Jacobthornton' })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('removes a row on remove-button click and keeps the rest intact', async () => {
    const user = userEvent.setup()
    render(<StatusTable />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(5)
    const jacobRow = screen.getByText('Jacobthornton').closest('tr') as HTMLElement
    await user.click(within(jacobRow).getByRole('button', { name: 'Close' }))
    expect(screen.queryByText('Jacobthornton')).not.toBeInTheDocument()
    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
    expect(screen.getByText('Markotto89')).toBeInTheDocument()
    expect(screen.getByText('Garybird_2020')).toBeInTheDocument()
    expect(screen.getAllByText('Active')).toHaveLength(3)
    expect(screen.getAllByText('Waiting for Resassignment')).toHaveLength(1)
  })

  it('shows an empty-state row when every member is removed', async () => {
    const user = userEvent.setup()
    render(<StatusTable />)
    for (let i = 0; i < 5; i += 1) {
      const table = screen.getByRole('table')
      const closeButton = within(table)
        .getAllByRole('button', { name: 'Close' })
        .at(-1) as HTMLElement
      await user.click(closeButton)
    }
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0)
    const emptyCell = screen.getByText('No members to show.')
    expect(emptyCell).toHaveAttribute('colspan', '5')
  })
})
