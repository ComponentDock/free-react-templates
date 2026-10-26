import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JOBS } from '../data/jobs'
import { JobCard } from './JobCard'

const designer = JOBS[0]!
const manager = JOBS[1]!

describe('JobCard', () => {
  it('reads top to bottom as a hiring notice', () => {
    render(<JobCard job={designer} saved={false} onToggle={() => {}} />)

    const card = screen.getByRole('article')
    expect(card).toHaveAttribute('id', 'job-senior-product-designer')
    expect(card.className).toContain('rounded-[18px]')
    expect(card.className).toContain('p-[20px_20px_18px]')
    expect(card.className).toContain('text-[14.5px]')
    expect(card.className).toContain('leading-[1.45]')
    expect(card.className).toContain('border-line')
    expect(card.className).not.toContain('bg-saved')

    expect(screen.getByText('Tideline')).toBeInTheDocument()
    expect(screen.getByText('Posted 2 days ago')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Senior Product Designer')
  })

  it('paints the initials tile from the job, and hides it from assistive tech', () => {
    const { container } = render(<JobCard job={manager} saved={false} onToggle={() => {}} />)

    const tile = screen.getByText('Nv')
    expect(tile).toHaveAttribute('aria-hidden', 'true')
    expect(tile.style.backgroundColor).toBe('rgb(124, 58, 237)')
    expect(tile.className).toContain('size-11')
    expect(tile.className).toContain('text-[16px]')

    const glyphs = [...container.querySelectorAll('svg')]
    expect(glyphs).toHaveLength(2)
    expect(glyphs.map((glyph) => glyph.getAttribute('aria-hidden'))).toEqual(['true', 'true'])
  })

  it('links the title into the page instead of a dead hash', () => {
    render(<JobCard job={designer} saved={false} onToggle={() => {}} />)

    const link = screen.getByRole('link', { name: 'Senior Product Designer' })
    expect(link).toHaveAttribute('href', '#job-senior-product-designer')
    expect(link.className).toContain('shortlist-card-link')
    expect(link.className).toContain('after:absolute')
    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })

  it('renders the location row with its work-mode pill', () => {
    render(<JobCard job={manager} saved={false} onToggle={() => {}} />)

    expect(screen.getByText('London, UK')).toBeInTheDocument()

    const pill = screen.getByText('Hybrid · 2 days')
    expect(pill.className).toContain('rounded-full')
    expect(pill.className).toContain('text-[12.5px]')
    expect(pill.className).toContain('bg-hybrid')
    expect(pill.className).toContain('text-hybrid-ink')
  })

  it('renders outlined skill chips as plain list items', () => {
    render(<JobCard job={manager} saved={false} onToggle={() => {}} />)

    const list = screen.getByRole('list', { name: 'Skills' })
    expect(list.className).toContain('list-none')
    expect(list.className).toContain('gap-1.5')

    const chips = [...list.querySelectorAll('li')]
    expect(chips.map((chip) => chip.textContent)).toEqual(['Mobile', 'Healthcare', 'Discovery', 'SQL'])
    chips.forEach((chip) => {
      expect(chip.className).toContain('border-line')
      expect(chip.className).toContain('text-[13px]')
      expect(chip.querySelector('button, a')).toBeNull()
    })
  })

  it('pins a hairline footer with the pay and the contract type', () => {
    render(<JobCard job={designer} saved={false} onToggle={() => {}} />)

    const pay = screen.getByText('€78k – €95k')
    expect(pay.tagName).toBe('STRONG')
    expect(pay.className).toContain('text-[16px]')
    expect(pay.className).toContain('text-ink')
    expect(pay.parentElement?.textContent).toBe('€78k – €95k / year')
    expect(pay.parentElement?.className).toContain('text-muted')

    expect(screen.getByText('Full-time').className).toContain('text-[13px]')

    const footer = pay.parentElement!.parentElement!
    expect(footer.className).toContain('mt-auto')
    expect(footer.className).toContain('border-t')
    expect(footer.className).toContain('pt-[14px]')
  })

  it('keeps the hourly suffix on a contract role', () => {
    render(<JobCard job={JOBS[2]!} saved={false} onToggle={() => {}} />)

    expect(screen.getByText('$65 – $80').parentElement?.textContent).toBe('$65 – $80 / hour')
    expect(screen.getByText('Contract')).toBeInTheDocument()
  })

  it('repaints the whole card when the job is saved', () => {
    render(<JobCard job={manager} saved onToggle={() => {}} />)

    const card = screen.getByRole('article')
    expect(card.className).toContain('border-saved-line')
    expect(card.className).toContain('bg-saved')
    expect(card.className).not.toContain('border-line')

    const button = screen.getByRole('button', { name: /Remove Product Manager/ })
    expect(button).toHaveAttribute('aria-pressed', 'true')
  })

  it('hands the toggle back to its owner', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<JobCard job={designer} saved={false} onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: 'Save Senior Product Designer at Tideline' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
