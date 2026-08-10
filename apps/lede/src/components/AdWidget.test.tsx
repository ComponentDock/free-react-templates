import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AdWidget } from './AdWidget'
import { adLabel } from '../data'

describe('AdWidget', () => {
  it('renders a full-width ad banner placeholder', () => {
    render(<AdWidget />)

    expect(screen.getByRole('link', { name: adLabel })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: adLabel })).toBeInTheDocument()
  })
})
