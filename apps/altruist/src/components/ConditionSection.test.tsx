import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConditionSection } from './ConditionSection'
import { CONDITION_CHECKLIST } from '../data'

describe('ConditionSection', () => {
  it('renders two alternating slides with copy and the teal checklist', () => {
    render(<ConditionSection />)

    /* Two slides, each with an h1 and a photo. */
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(2)
    expect(screen.getAllByRole('img')).toHaveLength(2)

    for (const item of CONDITION_CHECKLIST) {
      expect(screen.getAllByText(item)).toHaveLength(2)
    }
  })
})
