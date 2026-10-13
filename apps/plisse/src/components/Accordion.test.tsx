import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion } from './Accordion'
import { ACCORDION_ITEMS } from '../data'

const [first, second, third] = ACCORDION_ITEMS

describe('Accordion', () => {
  it('renders every row label from the source order', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    expect(screen.getByRole('button', { name: first!.question })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: second!.question })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: third!.question })).toBeInTheDocument()
  })

  it('renders each row label as a button element', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const rows = screen.getAllByRole('button')
    expect(rows).toHaveLength(3)
    for (const row of rows) {
      expect(row.tagName).toBe('BUTTON')
      expect(row).toHaveAttribute('type', 'button')
    }
  })

  it('starts with every row collapsed when no defaultOpenId is given', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      expect(screen.getByRole('button', { name: item.question })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('opens the row named by defaultOpenId and leaves the others closed', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    expect(screen.getByRole('button', { name: first!.question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('region', { name: first!.question })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: second!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: third!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('wires aria-controls and aria-labelledby between row and panel', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    const row = screen.getByRole('button', { name: first!.question })
    expect(row).toHaveAttribute('aria-controls', `${first!.id}-panel`)
    const panel = screen.getByRole('region', { name: first!.question })
    expect(panel).toHaveAttribute('id', `${first!.id}-panel`)
    expect(panel).toHaveAttribute('aria-labelledby', `${first!.id}-toggle`)
  })

  it('opens a closed row when it is clicked', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const row = screen.getByRole('button', { name: second!.question })

    await user.click(row)

    expect(row).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: second!.question })).toBeInTheDocument()
  })

  it('closes the previously open row when another row is opened (single-open)', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)

    await user.click(screen.getByRole('button', { name: third!.question }))

    expect(screen.getByRole('button', { name: first!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('region', { name: first!.question })).not.toBeInTheDocument()
    expect(screen.getByRole('region', { name: third!.question })).toBeInTheDocument()
  })

  it('closes the open row when it is clicked again, leaving none open', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    const row = screen.getByRole('button', { name: first!.question })

    await user.click(row)

    expect(row).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
  })

  it('toggles a row with the Enter key', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const row = screen.getByRole('button', { name: second!.question })
    row.focus()

    await user.keyboard('{Enter}')

    expect(row).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles a row with the Space key', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)
    const row = screen.getByRole('button', { name: third!.question })
    row.focus()

    await user.keyboard(' ')

    expect(row).toHaveAttribute('aria-expanded', 'true')
  })

  it('keeps a focus-visible ring on every row button', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    for (const item of ACCORDION_ITEMS) {
      const tokens = screen.getByRole('button', { name: item.question }).className.split(' ')
      expect(tokens).toContain('focus-visible:ring-2')
    }
  })

  it('gives every row a 4px radius and a 10px gap between rows', () => {
    const { container } = render(<Accordion items={ACCORDION_ITEMS} />)
    const rows = container.querySelectorAll('[data-testid$="-item"]')
    expect(rows).toHaveLength(3)
    for (const row of rows) {
      expect(row.className.split(' ')).toContain('rounded')
    }
    expect(container.firstElementChild!.className).toContain('gap-[10px]')
  })

  it('styles the open row as a solid accent bar with white text and an up-chevron', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    const row = screen.getByRole('button', { name: first!.question })
    const tokens = row.className.split(' ')

    expect(tokens).toContain('bg-accent')
    expect(tokens).toContain('text-white')
    expect(tokens).toContain('border-transparent')
    expect(row.querySelector('svg.lucide-chevron-up')).not.toBeNull()
    expect(screen.getByTestId(`${first!.id}-item`).className.split(' ')).toContain('z-[2]')
  })

  it('styles a closed row with the hairline border, muted text and a down-chevron', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    const row = screen.getByRole('button', { name: second!.question })
    const tokens = row.className.split(' ')

    expect(tokens).toContain('border-border-row')
    expect(tokens).toContain('text-muted')
    expect(tokens).toContain('bg-item-bg')
    expect(row.querySelector('svg.lucide-chevron-down')).not.toBeNull()
    expect(screen.getByTestId(`${second!.id}-item`).className.split(' ')).not.toContain('z-[2]')
  })

  it('positions the chevron 15px from the row edge and pads the label to 40px', () => {
    render(<Accordion items={ACCORDION_ITEMS} />)
    const row = screen.getByRole('button', { name: first!.question })
    const icon = row.querySelector('span[aria-hidden="true"]')!

    expect(icon.className).toContain('left-[15px]')
    expect(row.className).toContain('pl-[40px]')
    expect(row.className).toContain('py-[15px]')
  })

  it('renders the panel copy in body-text colour on a 20px padding box', async () => {
    const user = userEvent.setup()
    render(<Accordion items={ACCORDION_ITEMS} />)

    await user.click(screen.getByRole('button', { name: first!.question }))

    const panel = screen.getByRole('region', { name: first!.question })
    expect(panel.className).toContain('p-5')
    expect(panel.className).toContain('text-body-text')
    expect(panel).toHaveTextContent(first!.answer)
  })

  it('renders no panel for a closed row', () => {
    render(<Accordion items={ACCORDION_ITEMS} defaultOpenId={first!.id} />)
    expect(screen.getAllByRole('region')).toHaveLength(1)
  })
})
