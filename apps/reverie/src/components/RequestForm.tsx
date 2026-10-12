import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  SECTION_IDS,
  GUEST_OPTIONS,
  GUEST_PLACEHOLDER,
  REQUEST_EYEBROW,
  REQUEST_FIELDS,
  REQUEST_FORM_LABEL,
  REQUEST_LEAD,
  REQUEST_SUBMIT_LABEL,
  REQUEST_SUCCESS,
  REQUEST_TITLE,
  REQUEST_TITLE_ID,
  REQUEST_VALUES,
  SERVICE_OPTIONS,
  SERVICE_PLACEHOLDER,
  type FieldName,
  type RequestField,
} from '../lib/site'
import { focusField, validateRequest, type FieldErrors } from '../lib/forms'
import {
  containerClass,
  fieldClass,
  fieldErrorClass,
  fieldInvalidClass,
  fieldLabelClass,
  fieldWrapClass,
  requestEyebrowClass,
  requestGridClass,
  requestHeaderClass,
  requestLeadClass,
  requestPanelClass,
  requestSectionClass,
  requestSuccessClass,
  requestTitleClass,
  selectWrapClass,
  submitClass,
  submitRowClass,
} from '../lib/styles'

interface FieldProps {
  field: RequestField
  value: string
  error: string | undefined
  onChange: (name: FieldName, value: string) => void
}

/** One control of the 2×2 grid: a text box, the mailbox, or one of the design's two pickers. */
function Field({ field, value, error, onChange }: FieldProps) {
  const errorId = `${field.id}-error`
  const invalid = error !== undefined
  const options = field.name === 'service' ? SERVICE_OPTIONS : GUEST_OPTIONS
  const placeholder = field.name === 'service' ? SERVICE_PLACEHOLDER : GUEST_PLACEHOLDER
  const shared = {
    id: field.id,
    className: cn(fieldClass, invalid && fieldInvalidClass),
    'aria-invalid': invalid,
    'aria-describedby': invalid ? errorId : undefined,
  }

  return (
    <div className={fieldWrapClass}>
      <label className={fieldLabelClass} htmlFor={field.id}>
        {field.label}
      </label>

      {field.kind === 'select' ? (
        <div className={selectWrapClass}>
          <select
            {...shared}
            value={value}
            onChange={(event) => {
              onChange(field.name, event.target.value)
            }}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          {...shared}
          type={field.kind === 'email' ? 'email' : 'text'}
          value={value}
          onChange={(event) => {
            onChange(field.name, event.target.value)
          }}
        />
      )}

      {invalid ? (
        <p id={errorId} className={fieldErrorClass}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

/**
 * The card that rides up over the photo band: the olive header block the design paints, then the
 * white panel with its four fields in a 2×2 grid and the square submit. The reference posts to a
 * script; here the four checks are the page's own, the errors answer field by field, and a
 * completed enquiry is confirmed in place.
 */
export function RequestForm() {
  const [values, setValues] = useState(REQUEST_VALUES)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [sent, setSent] = useState(false)

  function update(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateRequest(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      for (const field of REQUEST_FIELDS) {
        if (found[field.name] !== undefined) {
          focusField(field.id)
          break
        }
      }

      return
    }

    setSent(true)
  }

  return (
    <section
      id={SECTION_IDS.request}
      className={requestSectionClass}
      aria-labelledby={REQUEST_TITLE_ID}
    >
      <div className={containerClass}>
        <div className={requestHeaderClass}>
          <span className={requestEyebrowClass}>{REQUEST_EYEBROW}</span>
          <h2 id={REQUEST_TITLE_ID} className={requestTitleClass}>
            {REQUEST_TITLE}
          </h2>
          <p className={requestLeadClass}>{REQUEST_LEAD}</p>
        </div>

        {sent ? (
          <p className={requestSuccessClass} role="status">
            {REQUEST_SUCCESS}
          </p>
        ) : (
          <form
            className={requestPanelClass}
            aria-label={REQUEST_FORM_LABEL}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={requestGridClass}>
              {REQUEST_FIELDS.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  value={values[field.name]}
                  error={errors[field.name]}
                  onChange={update}
                />
              ))}
            </div>

            <div className={submitRowClass}>
              <Button type="submit" className={submitClass}>
                {REQUEST_SUBMIT_LABEL}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
