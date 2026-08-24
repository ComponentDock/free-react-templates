import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders heading and volunteer CTA button', () => {
    render(<CtaBanner />)

    expect(screen.getByText('Do You Care Our Children?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Be A Volunteer' })).toBeInTheDocument()
  })

  it('links volunteer button to volunteer section', () => {
    render(<CtaBanner />)

    const btn = screen.getByRole('link', { name: 'Be A Volunteer' })
    expect(btn).toHaveAttribute('href', '#volunteer')
  })

  it('has section with id cta-banner', () => {
    const { container } = render(<CtaBanner />)

    const section = container.querySelector('#cta-banner')
    expect(section).toBeInTheDocument()
  })
})
