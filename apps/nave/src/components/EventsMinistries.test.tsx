import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { EventsMinistries } from './EventsMinistries'

describe('EventsMinistries', () => {
  it('renders section heading', () => {
    render(<EventsMinistries />)
    expect(screen.getByText('Events & Ministries')).toBeInTheDocument()
  })

  it('renders all three event cards', () => {
    render(<EventsMinistries />)
    expect(screen.getByText('Prayer & Devotional for Children')).toBeInTheDocument()
    expect(screen.getByText('We Must Walk In The Middle of The Road')).toBeInTheDocument()
    expect(screen.getByText('Tracts Giving')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<EventsMinistries />)
    expect(screen.getByText(/Children Ministries/)).toBeInTheDocument()
    expect(screen.getByText(/Missions/)).toBeInTheDocument()
    expect(screen.getByText(/Care Ministry/)).toBeInTheDocument()
  })
})
