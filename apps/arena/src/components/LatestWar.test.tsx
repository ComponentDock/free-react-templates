import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestWar } from './LatestWar'

describe('LatestWar', () => {
  it('shows the section heading', () => {
    render(<LatestWar />)
    expect(screen.getByRole('heading', { name: /Latest War Fight/i })).toBeInTheDocument()
  })

  it('renders the feature card with title, date, score and actions', () => {
    render(<LatestWar />)
    expect(screen.getByRole('heading', { name: /Open War Challenge/i })).toBeInTheDocument()
    expect(screen.getByText('27 june, 2020')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view fight/i })).toBeInTheDocument()
    expect(screen.getByText('190')).toBeInTheDocument()
    expect(screen.getByText('189')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Tutorial' })).toBeInTheDocument()
  })
})
