import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { SocialIcon } from './social-icons'

describe('SocialIcon', () => {
  it('renders an svg path for each supported brand icon', () => {
    const { container } = render(
      <div>
        <SocialIcon name="Facebook" />
        <SocialIcon name="Instagram" />
        <SocialIcon name="Twitter" />
        <SocialIcon name="Linkedin" />
        <SocialIcon name="Youtube" />
      </div>,
    )
    expect(container.querySelectorAll('svg')).toHaveLength(5)
    expect(container.querySelectorAll('path')).toHaveLength(5)
  })
})
