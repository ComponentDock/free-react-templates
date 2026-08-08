import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and both action buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Take the Next Step?' }),
    ).toBeInTheDocument()

    const findJobs = screen.getByRole('link', { name: 'Find Jobs Now' })
    expect(findJobs).toHaveAttribute('href', '#jobs')

    const postJob = screen.getByRole('link', { name: 'Post a Job' })
    expect(postJob).toHaveAttribute('href', '#')
  })
})
