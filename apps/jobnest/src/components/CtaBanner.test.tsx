import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders both CTA headings and buttons', () => {
    render(<CtaBanner />)

    expect(screen.getByText('Looking for a Job?')).toBeInTheDocument()
    expect(screen.getByText('Looking for a Expert?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Browse Job' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Post a Job' })).toBeInTheDocument()
  })
})
