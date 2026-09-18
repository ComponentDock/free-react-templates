import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestSermonsEvents } from './LatestSermonsEvents'

describe('LatestSermonsEvents', () => {
  it('renders sermons section', () => {
    render(<LatestSermonsEvents />)
    expect(screen.getByText('Latest Sermons')).toBeInTheDocument()
    expect(screen.getByText('The Power of Prayer')).toBeInTheDocument()
    expect(screen.getByText('Walking In Faith')).toBeInTheDocument()
    expect(screen.getByText('Grace And Mercy')).toBeInTheDocument()
  })

  it('renders events section', () => {
    render(<LatestSermonsEvents />)
    expect(screen.getByText('Latest Events')).toBeInTheDocument()
    expect(screen.getByText('Summer Worship Night')).toBeInTheDocument()
    expect(screen.getByText('Community BBQ')).toBeInTheDocument()
  })

  it('renders sermon media buttons', () => {
    render(<LatestSermonsEvents />)
    expect(screen.getByLabelText('Watch The Power of Prayer')).toBeInTheDocument()
    expect(screen.getByLabelText('Listen The Power of Prayer')).toBeInTheDocument()
  })

  it('renders event Read More links', () => {
    render(<LatestSermonsEvents />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('has accessible label', () => {
    render(<LatestSermonsEvents />)
    expect(screen.getByLabelText('Sermons and events')).toBeInTheDocument()
  })
})
