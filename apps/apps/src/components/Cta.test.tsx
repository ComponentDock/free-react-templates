import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the download heading, blurb, and store buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Download This App Today!' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/find one video game lover/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Available on App Store' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Available on Play Store' })).toBeInTheDocument()
  })
})
