import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Unique Design',
      'Clean Layout',
      'Well Responsive',
      'Pro Development',
      'Well Documented',
      'Quick Marketing',
    ]
    titles.forEach((t) => expect(screen.getByText(t)).toBeInTheDocument())
  })
})
