import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and four numbered steps', () => {
    render(<HowItWorks />)

    expect(screen.getByRole('heading', { name: 'Your Move in 4 Easy Steps' })).toBeInTheDocument()
    for (const title of [
      'Request a Quote',
      'Schedule Your Move',
      'We Handle Everything',
      'Welcome Home',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    for (const number of ['01', '02', '03', '04']) {
      expect(screen.getByText(number)).toBeInTheDocument()
    }
  })
})
