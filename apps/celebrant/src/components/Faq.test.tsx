import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { FAQ_TITLE, FAQS } from '../lib/site'
import { tokens } from '../test/match-media'

describe('Faq', () => {
  it('opens the first of seven distinct questions on load', () => {
    render(<Faq />)

    expect(screen.getByRole('heading', { level: 2, name: FAQ_TITLE })).toHaveClass('italic')

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(FAQS.length)
    expect(new Set(buttons.map((button) => button.textContent)).size).toBe(FAQS.length)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('region', { name: FAQS[0]?.question as string })).toHaveTextContent(
      FAQS[0]?.answer as string,
    )
    expect(screen.queryByRole('region', { name: FAQS[1]?.question as string })).toBeNull()
  })

  it('tones the open question black and the folded ones grey, turning the chevron over', () => {
    render(<Faq />)

    const buttons = screen.getAllByRole('button')

    expect(tokens(buttons[0] as Element)).toContain('text-ink')
    expect(tokens(buttons[0] as Element)).not.toContain('text-body')
    expect(tokens(buttons[1] as Element)).toContain('text-body')
    expect(tokens(buttons[0] as Element)).toEqual(
      expect.arrayContaining(['text-left', 'text-[20px]', 'leading-[1.5]', 'px-[15px]', 'py-[10px]']),
    )
    expect(tokens((buttons[0] as Element).querySelector('svg') as Element)).toContain('rotate-180')
    expect(tokens((buttons[1] as Element).querySelector('svg') as Element)).toContain('rotate-0')
  })

  it('hands the open panel to the next question and folds it again on a second press', () => {
    render(<Faq />)

    const buttons = screen.getAllByRole('button')

    fireEvent.click(buttons[2] as HTMLElement)

    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: FAQS[0]?.question as string })).toBeNull()
    expect(screen.getByRole('region', { name: FAQS[2]?.question as string })).toHaveTextContent(
      FAQS[2]?.answer as string,
    )

    fireEvent.click(buttons[2] as HTMLElement)

    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: FAQS[2]?.question as string })).toBeNull()
    expect(screen.queryAllByRole('region')).toHaveLength(1)
  })

  it('rules every row in the design card border and pads the answer without a top step', () => {
    const { container } = render(<Faq />)

    const buttons = screen.getAllByRole('button')
    const row = buttons[0]?.closest('div') as HTMLElement

    expect(tokens(row)).toEqual(expect.arrayContaining(['border', 'border-faq', 'rounded-[4px]', 'mb-[8px]']))
    expect(buttons[0]?.getAttribute('aria-controls')).toBe(
      screen.getByRole('region', { name: FAQS[0]?.question as string }).getAttribute('id'),
    )
    expect(tokens(container.querySelector('[role="region"]') as Element)).toEqual(
      expect.arrayContaining(['pt-0', 'px-[20px]', 'pb-[20px]']),
    )
  })
})
