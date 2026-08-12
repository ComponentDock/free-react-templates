import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'
import { CTA_TEXT, CTA_TITLE } from '../data'

describe('CtaBanner', () => {
  it('renders the dark banner with heading, paragraph, and view-all button', () => {
    const { container } = render(<CtaBanner />)

    expect(screen.getByRole('heading', { name: CTA_TITLE })).toBeInTheDocument()
    expect(screen.getByText(CTA_TEXT)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'view all' })).toBeInTheDocument()
    expect(container.querySelector('section')).toHaveClass('bg-black')
  })
})
