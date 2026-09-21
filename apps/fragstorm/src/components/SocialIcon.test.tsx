import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './TopBar'

describe('SocialIcon', () => {
  it('renders an icon for known types', () => {
    const { container } = render(<SocialIcon icon="facebook" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('returns null for unknown icon types', () => {
    const { container } = render(<SocialIcon icon="unknown" />)
    expect(container.innerHTML).toBe('')
  })
})
