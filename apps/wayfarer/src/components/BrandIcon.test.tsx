import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it.each(['instagram', 'linkedin', 'facebook'] as const)(
    'renders the %s icon with its accessible label',
    (name) => {
      render(<BrandIcon name={name} label={name} className="h-4 w-4" />)
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    },
  )
})
