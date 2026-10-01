import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartTable } from './CartTable'

describe('CartTable', () => {
  it('renders one shadowed table inside a horizontal-scroll wrapper', () => {
    render(<CartTable />)
    const table = screen.getByRole('table')
    expect(table.className).toContain('w-full')
    expect(table.className).toContain('min-w-[1000px]')
    expect(table.className).toContain('border-collapse')
    expect(table.className).toContain('bg-white')
    expect(table.className).toContain('text-ink')
    expect(table.className).toContain('shadow-[0_5px_12px_-12px_rgba(0,0,0,0.29)]')
    expect(table.className).toContain('mb-4')
    const wrapper = table.parentElement as HTMLElement
    expect(wrapper.className).toContain('overflow-x-auto')
  })

  it('renders seven header cells on the sage bar with scope on the four labeled columns', () => {
    render(<CartTable />)
    const table = screen.getByRole('table')
    const headers = within(table).getAllByRole('columnheader')
    expect(headers.map((cell) => cell.textContent)).toEqual([
      '',
      '',
      'Product',
      'Price',
      'Quantity',
      'total',
      '',
    ])
    expect(headers[0]).not.toHaveAttribute('scope')
    expect(headers[1]).not.toHaveAttribute('scope')
    expect(headers[2]).toHaveAttribute('scope', 'col')
    expect(headers[3]).toHaveAttribute('scope', 'col')
    expect(headers[4]).toHaveAttribute('scope', 'col')
    expect(headers[5]).toHaveAttribute('scope', 'col')
    expect(headers[6]).not.toHaveAttribute('scope')
    for (const cell of headers) {
      expect(cell.className).toContain('text-[13px]')
      expect(cell.className).toContain('font-medium')
      expect(cell.className).toContain('text-white')
      expect(cell.className).toContain('p-[30px]')
      expect(cell.className).toContain('align-bottom')
      expect(cell.className).toContain('border-none')
      expect(cell.className).toContain('text-left')
    }
    const headerRow = within(table).getAllByRole('row')[0] as HTMLElement
    expect(headerRow.className).toContain('bg-sage')
  })

  it('renders five body rows with the canonical cart data', () => {
    render(<CartTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    expect(bodyRows).toHaveLength(5)
    expect(screen.getAllByText('Sneakers Shoes 2020 For Men')).toHaveLength(5)
    expect(screen.getAllByText('Fugiat voluptates quasi nemo, ipsa perferendis')).toHaveLength(5)
    expect(screen.getByText('$44.99')).toBeInTheDocument()
    expect(screen.getAllByText('$30.99')).toHaveLength(2)
    expect(screen.getAllByText('$35.50')).toHaveLength(2)
    expect(screen.getAllByText('$76.99')).toHaveLength(2)
    expect(screen.getAllByText('$40.00')).toHaveLength(2)
    expect(screen.getByText('$89.98')).toBeInTheDocument()
    const inputs = screen.getAllByRole('textbox') as HTMLInputElement[]
    expect(inputs.map((input) => input.value)).toEqual(['2', '1', '1', '1', '1'])
    for (const input of inputs) {
      expect(input).toHaveAttribute('min', '1')
      expect(input).toHaveAttribute('max', '100')
    }
  })

  it('renders body rows as white bands with page-colored separators', () => {
    render(<CartTable />)
    const table = screen.getByRole('table')
    const bodyRows = within(table).getAllByRole('row').slice(1)
    for (const row of bodyRows) {
      expect(row.className).toContain('mb-[10px]')
      expect(row.className).toContain('border-b-4')
      expect(row.className).toContain('border-page')
      expect(row.className).toContain('last:border-b-0')
    }
  })

  it('defaults row 1 checkbox to checked and rows 2–5 to unchecked', () => {
    render(<CartTable />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(5)
    expect(checkboxes[0]).toBeChecked()
    for (const box of checkboxes.slice(1)) {
      expect(box).not.toBeChecked()
    }
  })

  it('renders picsum thumbnails with row 5 reusing the first seed', () => {
    const { container } = render(<CartTable />)
    const thumbs = Array.from(container.querySelectorAll('[aria-hidden="true"].bg-cover'))
    expect(thumbs).toHaveLength(5)
    const seeds = ['rowline-1', 'rowline-2', 'rowline-3', 'rowline-4', 'rowline-1']
    thumbs.forEach((thumb, index) => {
      expect((thumb as HTMLElement).style.backgroundImage).toContain(
        `picsum.photos/seed/${seeds[index]}/200/160`,
      )
    })
  })

  it('toggles a row checkbox via React state', async () => {
    const user = userEvent.setup()
    render(<CartTable />)
    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[1] as HTMLElement)
    expect(checkboxes[1]).toBeChecked()
    await user.click(checkboxes[1] as HTMLElement)
    expect(checkboxes[1]).not.toBeChecked()
  })

  it('recomputes the line total when the quantity is edited', () => {
    render(<CartTable />)
    const inputs = screen.getAllByRole('textbox') as HTMLInputElement[]
    fireEvent.change(inputs[2] as HTMLElement, { target: { value: '4' } })
    expect(screen.getByText('$142.00')).toBeInTheDocument()
    expect(screen.getAllByText('$35.50')).toHaveLength(1)
    expect(screen.getAllByText('$89.98')).toHaveLength(1)
    expect(screen.getAllByText('$30.99')).toHaveLength(2)
    expect(screen.getAllByText('$76.99')).toHaveLength(2)
    expect(screen.getAllByText('$40.00')).toHaveLength(2)
  })

  it('clamps quantity edits to the source min and max', () => {
    render(<CartTable />)
    const inputs = screen.getAllByRole('textbox') as HTMLInputElement[]
    fireEvent.change(inputs[0] as HTMLElement, { target: { value: '0' } })
    expect((inputs[0] as HTMLInputElement).value).toBe('1')
    expect(screen.getAllByText('$44.99')).toHaveLength(2)
    fireEvent.change(inputs[0] as HTMLElement, { target: { value: '101' } })
    expect((inputs[0] as HTMLInputElement).value).toBe('100')
    expect(screen.getByText('$4499.00')).toBeInTheDocument()
  })

  it('removes a row on remove-button click and keeps the rest intact', async () => {
    const user = userEvent.setup()
    render(<CartTable />)
    expect(screen.getAllByRole('checkbox')).toHaveLength(5)
    const bodyRows = screen.getAllByRole('row').slice(1)
    await user.click(within(bodyRows[1] as HTMLElement).getByRole('button', { name: 'Close' }))
    expect(screen.getAllByRole('checkbox')).toHaveLength(4)
    expect(screen.queryByText('$30.99')).not.toBeInTheDocument()
    expect(screen.getAllByText('$44.99')).toHaveLength(1)
    expect(screen.getAllByText('$40.00')).toHaveLength(2)
    expect(screen.getAllByText('$89.98')).toHaveLength(1)
  })

  it('shows an empty-state row when every item is removed', async () => {
    const user = userEvent.setup()
    render(<CartTable />)
    for (let i = 0; i < 5; i += 1) {
      const table = screen.getByRole('table')
      const closeButton = within(table)
        .getAllByRole('button', { name: 'Close' })
        .at(-1) as HTMLElement
      await user.click(closeButton)
    }
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0)
    const emptyCell = screen.getByText('No items to show.')
    expect(emptyCell).toHaveAttribute('colspan', '7')
  })
})
