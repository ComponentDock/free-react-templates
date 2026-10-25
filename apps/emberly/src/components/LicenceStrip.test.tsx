import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LicenceStrip } from './LicenceStrip'
import {
  INSURANCE,
  LICENCE_BODY,
  LICENCE_NUMBER,
  RATING,
  RATING_NOTE,
  REGION,
} from '../content'

describe('LicenceStrip', () => {
  it('carries the credentials on the left and the rating on the right', () => {
    const { container } = render(<LicenceStrip />)
    const strip = container.querySelector('[data-licence-bar]')

    expect(strip).toHaveClass('bg-ink-800')
    expect(strip?.firstElementChild).toHaveClass('h-9')
    expect(screen.getByText(LICENCE_BODY)).toBeInTheDocument()
    expect(screen.getByText(LICENCE_NUMBER)).toBeInTheDocument()
    expect(screen.getByText(INSURANCE)).toBeInTheDocument()
    expect(screen.getByText(REGION)).toBeInTheDocument()
    expect(screen.getByText(RATING)).toBeInTheDocument()
    expect(screen.getByText(RATING_NOTE)).toBeInTheDocument()
  })

  it('hides the two middle facts below sm so the strip stays one row', () => {
    render(<LicenceStrip />)
    expect(screen.getByText(INSURANCE).closest('li')).toHaveClass('hidden', 'sm:flex')
    expect(screen.getByText(RATING_NOTE)).toHaveClass('hidden', 'sm:inline')
  })
})
