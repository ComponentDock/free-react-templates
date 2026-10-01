import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MobileCta } from './MobileCta'

describe('MobileCta', () => {
  it('renders Subscribe and Listen Now links with section anchors', () => {
    render(<MobileCta />)
    const subscribe = screen.getByRole('link', { name: 'Subscribe' })
    expect(subscribe).toHaveAttribute('href', '#newsletter')
    const listen = screen.getByRole('link', { name: 'Listen Now' })
    expect(listen).toHaveAttribute('href', '#episodes')
  })

  it('is labelled as quick actions', () => {
    render(<MobileCta />)
    expect(screen.getByLabelText('Quick actions')).toBeInTheDocument()
  })
})
