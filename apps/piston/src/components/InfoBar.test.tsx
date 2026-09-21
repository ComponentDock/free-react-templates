import { render, screen } from '@testing-library/react'
import { InfoBar } from './InfoBar'
import { describe, expect, it } from 'vitest'

describe('InfoBar', () => {
  it('renders phone, address, and hours', () => {
    render(<InfoBar />)
    expect(screen.getByText('10-367-5501')).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByText('09AM — 09PM')).toBeInTheDocument()
  })
})
