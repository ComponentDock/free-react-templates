import { describe, expect, it } from 'vitest'
import { NOTICES, PANEL, TONE_TOKENS, dismissMessage, plural } from './notices'

describe('Allclear data — four notices and the copy around them', () => {
  it('prints the four notices in tone order with verbatim copy', () => {
    expect(NOTICES.map((notice) => notice.tone)).toEqual(['violet', 'green', 'amber', 'rose'])
    expect(NOTICES.map((notice) => notice.id)).toEqual([
      'design-review',
      'build-qa',
      'overdue-tasks',
      'storage',
    ])
    expect(NOTICES[0].title).toBe('Design review moved to Thursday')
    expect(NOTICES[0].text).toBe(
      'Priya rescheduled the review of the checkout flow to 26 September, 14:00. The agenda is unchanged.',
    )
    expect(NOTICES[2].text).toBe(
      '“Empty cart illustration” and “Push copy for reorders” were due on Monday.',
    )
    expect(NOTICES[3].text).toBe(
      'The shared design library uses 9.6 GB of 10 GB. New uploads will be blocked at the limit.',
    )
  })

  it('announces only the blocking notice', () => {
    expect(NOTICES.map((notice) => notice.role)).toEqual(['status', 'status', 'status', 'alert'])
  })

  it('declares a glyph colour and a tile ground for each tone', () => {
    expect(TONE_TOKENS).toEqual({
      violet: { tone: '#6d4aff', soft: '#efebff' },
      green: { tone: '#0f8a5f', soft: '#e2f6ec' },
      amber: { tone: '#b45309', soft: '#fdf0dc' },
      rose: { tone: '#d0264f', soft: '#fde6ec' },
    })
  })

  it('singularises at one notice and pluralises everywhere else', () => {
    expect(plural(1)).toBe('notice')
    expect(plural(0)).toBe('notices')
    expect(plural(4)).toBe('notices')
  })

  it('narrates the dismissal with the notice title and what is left', () => {
    expect(dismissMessage('Storage almost full', 3)).toBe(
      'Dismissed "Storage almost full". 3 notices left.',
    )
    expect(dismissMessage('Storage almost full', 1)).toBe(
      'Dismissed "Storage almost full". 1 notice left.',
    )
    expect(dismissMessage('Storage almost full', 0)).toBe(
      'Dismissed "Storage almost full". 0 notices left.',
    )
  })

  it('keeps the head and the control labels together', () => {
    expect(PANEL.title).toBe('Project Atlas')
    expect(PANEL.listLabel).toBe('Project notices')
    expect(PANEL.empty).toBe('You are all caught up.')
    expect(PANEL.restore).toBe('Show dismissed notices')
    expect(PANEL.restored).toBe('All notices restored.')
  })
})
