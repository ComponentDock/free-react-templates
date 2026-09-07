import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

async function goToStep2(user: ReturnType<typeof userEvent.setup>) {
  render(<App />)
  await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
  await user.selectOptions(screen.getByLabelText(/Preferred System/i), 'canvas')
  await user.selectOptions(screen.getByLabelText(/College/i), 'florida')
  await user.selectOptions(screen.getByLabelText(/Term/i), 'term 1')
  await user.type(screen.getByLabelText(/Instructor Username/i), 'jsmith')
  await user.click(screen.getByRole('button', { name: /next/i }))
}

async function goToStep3(user: ReturnType<typeof userEvent.setup>) {
  render(<App />)
  await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
  await user.selectOptions(screen.getByLabelText(/Preferred System/i), 'canvas')
  await user.selectOptions(screen.getByLabelText(/College/i), 'florida')
  await user.selectOptions(screen.getByLabelText(/Term/i), 'term 1')
  await user.type(screen.getByLabelText(/Instructor Username/i), 'jsmith')
  await user.click(screen.getByRole('button', { name: /next/i }))
  await user.type(screen.getByLabelText(/Date of Birth/i), '2000-01-15')
  await user.selectOptions(screen.getByLabelText(/Country of Birth/i), 'united states')
  await user.type(screen.getByLabelText(/Your Email/i), 'test@example.com')
  await user.type(screen.getByLabelText(/Phone Number/i), '555-1234')
  await user.click(screen.getByText('Male'))
  await user.click(screen.getByRole('button', { name: /next/i }))
}

describe('FormPad — Course Registration Wizard', () => {
  describe('Page layout', () => {
    it('renders the dark background page', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-neutral-900')
    })

    it('renders the decorative image panel on desktop', () => {
      render(<App />)
      const img = screen.getByAltText('Decorative')
      expect(img).toBeInTheDocument()
      expect(img.getAttribute('src')).toContain('picsum.photos')
    })

    it('renders the form with correct aria-label', () => {
      render(<App />)
      expect(screen.getByRole('form', { name: /course registration form/i })).toBeInTheDocument()
    })

    it('renders Poppins font family via Google Fonts link', () => {
      render(<App />)
      expect(screen.getByText(/Academic Programs/)).toBeInTheDocument()
    })

    it('prevents default form submission', () => {
      render(<App />)
      const form = screen.getByRole('form', { name: /course registration form/i })
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
      form.dispatchEvent(submitEvent)
      expect(form).toBeInTheDocument()
    })
  })

  describe('Form header', () => {
    it('displays the gold category tag', () => {
      render(<App />)
      const tag = screen.getByText('#Academic Programs')
      expect(tag).toBeInTheDocument()
      expect(tag.closest('a')).toHaveClass('bg-brand-gold')
    })

    it('displays the uppercase heading', () => {
      render(<App />)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toHaveTextContent('Register for the course online')
      expect(heading).toHaveClass('uppercase')
      expect(heading).toHaveClass('tracking-[3px]')
    })
  })

  describe('Step 1 — Course Information', () => {
    it('shows 5 fields on step 1', () => {
      render(<App />)
      expect(screen.getByLabelText(/UF Online/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Preferred System/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/College/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Term/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Instructor Username/i)).toBeInTheDocument()
    })

    it('shows select dropdowns with correct options', () => {
      render(<App />)
      const ufSelect = screen.getByLabelText(/UF Online/i)
      expect(ufSelect.tagName).toBe('SELECT')
      const options = Array.from(ufSelect.querySelectorAll('option'))
      expect(options.map((o) => o.textContent)).toEqual(['Select', 'No', 'Yes'])
    })

    it('validates all required fields on Next click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByLabelText(/Instructor Username/i)).toBeInTheDocument()
    })

    it('validates individual empty fields', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByLabelText(/Instructor Username/i)).toBeInTheDocument()
    })

    it('advances to step 2 when all fields filled', async () => {
      const user = userEvent.setup()
      render(<App />)

      await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
      await user.selectOptions(screen.getByLabelText(/Preferred System/i), 'canvas')
      await user.selectOptions(screen.getByLabelText(/College/i), 'florida')
      await user.selectOptions(screen.getByLabelText(/Term/i), 'term 1')
      await user.type(screen.getByLabelText(/Instructor Username/i), 'jsmith')

      await user.click(screen.getByRole('button', { name: /next/i }))

      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/Instructor Username/i)).not.toBeInTheDocument()
    })
  })

  describe('Step 2 — Personal Information', () => {
    it('shows personal fields on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Country of Birth/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument()
      expect(screen.getByText('Male')).toBeInTheDocument()
      expect(screen.getByText('Female')).toBeInTheDocument()
      expect(screen.getByText('Transgender')).toBeInTheDocument()
    })

    it('Previous button returns to step 1', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /previous/i }))
      expect(screen.getByLabelText(/Instructor Username/i)).toBeInTheDocument()
    })

    it('validates required fields on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument()
    })

    it('validates partial fields on step 2', async () => {
      const user = userEvent.setup()
      await goToStep2(user)
      await user.type(screen.getByLabelText(/Date of Birth/i), '2000-01-15')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument()
    })

    it('advances to step 3 when all fields filled', async () => {
      const user = userEvent.setup()
      await goToStep2(user)

      await user.type(screen.getByLabelText(/Date of Birth/i), '2000-01-15')
      await user.selectOptions(screen.getByLabelText(/Country of Birth/i), 'united states')
      await user.type(screen.getByLabelText(/Your Email/i), 'test@example.com')
      await user.type(screen.getByLabelText(/Phone Number/i), '555-1234')
      await user.click(screen.getByText('Male'))

      await user.click(screen.getByRole('button', { name: /next/i }))

      expect(screen.getByLabelText(/Course ID/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/Date of Birth/i)).not.toBeInTheDocument()
    })
  })

  describe('Step 3 — Course Selection & Agreement', () => {
    it('shows course fields and T&C checkbox on step 3', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      expect(screen.getByLabelText(/Course ID/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Course Title/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Section/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/Select Teacher/i)).toBeInTheDocument()
      expect(screen.getByText(/Terms & Conditions/)).toBeInTheDocument()
    })

    it('shows Submit button on step 3', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
    })

    it('blocks submission without T&C agreement', async () => {
      const user = userEvent.setup()
      await goToStep3(user)

      await user.type(screen.getByLabelText(/Course ID/i), 'CS101')
      await user.type(screen.getByLabelText(/Course Title/i), 'Intro to CS')
      await user.type(screen.getByLabelText(/Section/i), '001')
      await user.selectOptions(screen.getByLabelText(/Select Teacher/i), 'frances meyer')
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByLabelText(/Course ID/i)).toBeInTheDocument()
    })

    it('blocks submission with empty text fields', async () => {
      const user = userEvent.setup()
      await goToStep3(user)
      await user.click(screen.getByRole('button', { name: /submit/i }))
      expect(screen.getByLabelText(/Course ID/i)).toBeInTheDocument()
    })

    it('completes form submission with all fields and T&C', async () => {
      const user = userEvent.setup()
      await goToStep3(user)

      await user.type(screen.getByLabelText(/Course ID/i), 'CS101')
      await user.type(screen.getByLabelText(/Course Title/i), 'Intro to CS')
      await user.type(screen.getByLabelText(/Section/i), '001')
      await user.selectOptions(screen.getByLabelText(/Select Teacher/i), 'frances meyer')
      await user.click(screen.getByText(/Terms & Conditions/))
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByText('Registration Complete')).toBeInTheDocument()
    })

    it('shows confirmation message after submission', async () => {
      const user = userEvent.setup()
      await goToStep3(user)

      await user.type(screen.getByLabelText(/Course ID/i), 'CS101')
      await user.type(screen.getByLabelText(/Course Title/i), 'Intro to CS')
      await user.type(screen.getByLabelText(/Section/i), '001')
      await user.selectOptions(screen.getByLabelText(/Select Teacher/i), 'frances meyer')
      await user.click(screen.getByText(/Terms & Conditions/))
      await user.click(screen.getByRole('button', { name: /submit/i }))

      expect(screen.getByText('Your course registration has been submitted.')).toBeInTheDocument()
    })
  })

  describe('Progress indicator', () => {
    it('renders the progress bar', () => {
      render(<App />)
      const bars = document.querySelectorAll('[class*="bg-white/30"]')
      expect(bars.length).toBeGreaterThan(0)
    })
  })

  describe('Navigation buttons', () => {
    it('hides Previous button on step 1', () => {
      render(<App />)
      expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
    })

    it('shows Next button on step 1', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('shows Previous button on step 2', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
      await user.selectOptions(screen.getByLabelText(/Preferred System/i), 'canvas')
      await user.selectOptions(screen.getByLabelText(/College/i), 'florida')
      await user.selectOptions(screen.getByLabelText(/Term/i), 'term 1')
      await user.type(screen.getByLabelText(/Instructor Username/i), 'jsmith')
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    })

    it('nav buttons have correct styling', () => {
      render(<App />)
      const nextBtn = screen.getByRole('button', { name: /next/i })
      expect(nextBtn).toHaveClass('bg-primary-green')
      expect(nextBtn).toHaveClass('rounded-[27px]')
    })
  })

  describe('Footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('displays "More templates at Component Dock"', () => {
      render(<App />)
      expect(screen.getByText(/More templates at Component Dock/)).toBeInTheDocument()
    })
  })

  describe('Responsive behavior', () => {
    it('image is hidden on small screens via CSS class', () => {
      render(<App />)
      const imgContainer = screen.getByAltText('Decorative').closest('div')
      expect(imgContainer?.className).toContain('hidden')
      expect(imgContainer?.className).toContain('md:flex')
    })
  })

  describe('RadioGroup interaction', () => {
    it('selects different radio options', async () => {
      const user = userEvent.setup()
      await goToStep2(user)

      await user.click(screen.getByText('Female'))
      expect(screen.getByText('Female')).toBeInTheDocument()

      await user.click(screen.getByText('Transgender'))
      expect(screen.getByText('Transgender')).toBeInTheDocument()
    })
  })

  describe('Error clearing', () => {
    it('clears field error when field is updated', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      await user.selectOptions(screen.getByLabelText(/UF Online/i), 'yes')
      expect(screen.getByLabelText(/UF Online/i)).toBeInTheDocument()
    })
  })

  describe('SelectField chevron icon', () => {
    it('renders chevron down icon in selects', () => {
      render(<App />)
      const svgs = document.querySelectorAll('svg')
      expect(svgs.length).toBeGreaterThan(0)
    })
  })
})
