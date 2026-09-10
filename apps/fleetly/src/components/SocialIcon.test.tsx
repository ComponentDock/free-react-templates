import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './SocialIcon'

describe('SocialIcon', () => {
  it('renders a known icon by name', () => {
    const { container } = render(<SocialIcon name="facebook" className="h-4 w-4" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('returns null for an unknown icon name', () => {
    const { container } = render(<SocialIcon name={'unknown' as 'facebook'} className="h-4 w-4" />)
    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })
})
