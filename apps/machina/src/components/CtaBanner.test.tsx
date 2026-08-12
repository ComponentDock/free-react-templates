import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'
import { CTA_TEXT, CTA_TITLE } from '../data'

describe('CtaBanner', () => {
  it('shows the Up to 40% Off heading and supporting text', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: CTA_TITLE })).toBeInTheDocument()
    expect(screen.getByText(CTA_TEXT)).toBeInTheDocument()
  })
})
