import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemberRow } from './MemberRow'
import type { Member } from '../data/members'

const member: Member = {
  id: '1',
  email: 'markotto@email.com',
  added: 'Added: 01/03/2020',
  username: 'Markotto89',
  status: 'active',
  checked: true,
  avatarSeed: 'statusline-1',
}

describe('MemberRow', () => {
  it('renders five cells in the source order', () => {
    const { container } = render(
      <table>
        <tbody>
          <MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />
        </tbody>
      </table>,
    )
    const row = container.querySelector('tr') as HTMLElement
    const cells = within(row).getAllByRole('cell')
    expect(cells).toHaveLength(5)
  })

  it('renders the checkbox cell with an accessible name for the member', () => {
    render(<MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />)
    const checkbox = screen.getByRole('checkbox', { name: 'Select Markotto89' })
    expect(checkbox).toBeChecked()
  })

  it('renders the user cell with a circular avatar and stacked email/date', () => {
    const { container } = render(
      <MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />,
    )
    const avatar = container.querySelector(
      '[aria-hidden="true"].rounded-full',
    ) as HTMLElement | null
    expect(avatar).toBeInTheDocument()
    expect(avatar?.className).toContain('h-[50px]')
    expect(avatar?.className).toContain('w-[50px]')
    expect(avatar?.className).toContain('bg-cover')
    expect(avatar?.style.backgroundImage).toContain('picsum.photos/seed/statusline-1/100/100')
    expect(screen.getByText('markotto@email.com')).toBeInTheDocument()
    const added = screen.getByText('Added: 01/03/2020')
    expect(added.className).toContain('block')
    expect(added.className).toContain('text-[12px]')
    expect(added.className).toContain('text-subtext')
  })

  it('renders the username cell', () => {
    render(<MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />)
    expect(screen.getByText('Markotto89')).toBeInTheDocument()
  })

  it('renders the Active status pill for an active member', () => {
    render(<MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />)
    const pill = screen.getByText('Active')
    expect(pill.className).toContain('bg-active-bg')
    expect(pill.className).toContain('text-active-text')
  })

  it('renders the remove button with the small red × icon', () => {
    const { container } = render(
      <MemberRow member={member} onToggle={vi.fn()} onRemove={vi.fn()} />,
    )
    const button = screen.getByRole('button', { name: 'Close' })
    expect(button.className).toContain('opacity-50')
    const icon = container.querySelector('button svg')
    expect(icon).toBeInTheDocument()
    expect(icon?.getAttribute('class')).toContain('text-danger')
    expect(icon?.getAttribute('width')).toBe('12')
  })

  it('calls onToggle with the member id when the checkbox changes', async () => {
    const user = userEvent.setup()
    const handleToggle = vi.fn()
    render(<MemberRow member={member} onToggle={handleToggle} onRemove={vi.fn()} />)
    await user.click(screen.getByRole('checkbox', { name: 'Select Markotto89' }))
    expect(handleToggle).toHaveBeenCalledWith('1')
  })

  it('calls onRemove with the member id when the remove button is clicked', async () => {
    const user = userEvent.setup()
    const handleRemove = vi.fn()
    render(<MemberRow member={member} onToggle={vi.fn()} onRemove={handleRemove} />)
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(handleRemove).toHaveBeenCalledWith('1')
  })
})
