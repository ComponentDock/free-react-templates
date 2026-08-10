import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialNetworks } from './SocialNetworks'
import { socialNetworksTitle, socialRows } from '../data'

describe('SocialNetworks', () => {
  it('shows the widget title and four colored rows with counts and follow links', () => {
    render(<SocialNetworks />)

    expect(screen.getByRole('heading', { name: socialNetworksTitle })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(socialRows.length)
    for (const row of socialRows) {
      expect(screen.getByText(`${row.label} · ${row.count}`)).toBeInTheDocument()
      expect(screen.getAllByRole('link', { name: row.cta }).length).toBeGreaterThan(0)
    }
  })
})
