import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Download } from './Download'

describe('Download', () => {
  it('renders the heading and both app store buttons', () => {
    render(<Download />)

    const heading = screen.getByRole('heading')
    expect(heading.textContent).toMatch(/Get Download Massive app/)

    expect(screen.getByRole('link', { name: /Download From Google Play/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download On The App Store/ })).toBeInTheDocument()
  })
})
