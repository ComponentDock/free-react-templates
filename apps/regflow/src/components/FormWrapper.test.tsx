import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormWrapper } from './FormWrapper'

describe('FormWrapper', () => {
  it('renders children inside a centered container', () => {
    render(
      <FormWrapper>
        <div data-testid="child">Hello</div>
      </FormWrapper>,
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toHaveTextContent('Hello')
  })

  it('renders the background image overlay', () => {
    const { container } = render(
      <FormWrapper>
        <div>Content</div>
      </FormWrapper>,
    )
    // The background image div exists
    const bgDiv = container.querySelector('[style*="picsum"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
