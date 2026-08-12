import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Screenshots } from './Screenshots'

describe('Screenshots', () => {
  it('renders the title and three phone-framed screenshots', () => {
    render(<Screenshots />)

    expect(screen.getByRole('heading', { level: 2, name: 'App Screenshots' })).toBeInTheDocument()
    expect(screen.getByAltText('Home screen of the Ripply app')).toBeInTheDocument()
    expect(screen.getByAltText('Dashboard screen of the Ripply app')).toBeInTheDocument()
    expect(screen.getByAltText('Settings screen of the Ripply app')).toBeInTheDocument()
  })
})
