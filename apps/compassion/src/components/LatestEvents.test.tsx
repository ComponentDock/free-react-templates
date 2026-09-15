import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestEvents } from './LatestEvents'

describe('LatestEvents', () => {
  it('displays section heading', () => {
    render(<LatestEvents />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Events' })).toBeInTheDocument()
  })

  it('renders 3 event cards', () => {
    render(<LatestEvents />)
    expect(screen.getByText('Prayer & Devotional for Children')).toBeInTheDocument()
    expect(screen.getByText('We Must Walk In The Middle of The Road')).toBeInTheDocument()
    expect(screen.getByText('Tracts Giving')).toBeInTheDocument()
  })

  it('displays event dates and categories', () => {
    render(<LatestEvents />)
    expect(screen.getByText('May 12, 2018, Children Ministries')).toBeInTheDocument()
    expect(screen.getByText('June 8, 2018, Bible Study')).toBeInTheDocument()
    expect(screen.getByText('July 20, 2018, Outreach')).toBeInTheDocument()
  })

  it('displays event descriptions', () => {
    render(<LatestEvents />)
    expect(screen.getByText(/Join us for a special prayer/)).toBeInTheDocument()
    expect(screen.getByText(/A deep dive into balance/)).toBeInTheDocument()
    expect(screen.getByText(/Help us spread the word/)).toBeInTheDocument()
  })

  it('has event images with alt text', () => {
    render(<LatestEvents />)
    expect(
      screen.getByRole('img', { name: 'Prayer & Devotional for Children' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'We Must Walk In The Middle of The Road' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Tracts Giving' })).toBeInTheDocument()
  })
})
