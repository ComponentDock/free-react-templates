import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BibleStudy } from './BibleStudy'
import { bibleStudy } from '../data'

describe('BibleStudy', () => {
  it('renders the heading and description', () => {
    render(<BibleStudy />)
    expect(screen.getByText(bibleStudy.heading)).toBeInTheDocument()
    expect(screen.getByText(bibleStudy.description)).toBeInTheDocument()
  })

  it('displays countdown values', () => {
    render(<BibleStudy />)
    expect(screen.getByText(String(bibleStudy.countdown.days))).toBeInTheDocument()
    expect(screen.getByText(String(bibleStudy.countdown.hours))).toBeInTheDocument()
    expect(screen.getByText(String(bibleStudy.countdown.mins))).toBeInTheDocument()
    expect(screen.getByText(String(bibleStudy.countdown.secs))).toBeInTheDocument()
  })

  it('renders the Events Details button', () => {
    render(<BibleStudy />)
    expect(screen.getByRole('link', { name: bibleStudy.ctaLabel })).toBeInTheDocument()
  })
})
