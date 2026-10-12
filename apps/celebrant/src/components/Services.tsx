import { cn } from '@free-react-templates/ui'
import { SECTION_IDS, SERVICES, SERVICES_TITLE } from '../lib/site'
import {
  bandClass,
  containerClass,
  mediaBodyClass,
  mediaImageClass,
  mediaImageRightClass,
  mediaImgClass,
  mediaRowClass,
  mediaTextClass,
  mediaTitleClass,
  mediaTitleLinkClass,
  servicesGridClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

/**
 * The four services, two to a column, each an image beside a title and a line of copy. The second
 * and the fourth rows carry their picture on the right, so the column alternates as the design's
 * `order-lg-2` does — and every row takes the mint wash on hover or focus.
 */
export function Services() {
  return (
    <section id={SECTION_IDS.services} aria-label={SERVICES_TITLE} className={bandClass}>
      <div className={containerClass}>
        <SectionTitle roomy={false}>{SERVICES_TITLE}</SectionTitle>

        <div className={servicesGridClass}>
          {SERVICES.map((service) => (
            <article key={service.title} className={mediaRowClass}>
              <div className={cn(mediaImageClass, service.imageRight && mediaImageRightClass)}>
                <img
                  src={service.photo}
                  alt={service.alt}
                  width={250}
                  height={250}
                  className={mediaImgClass}
                />
              </div>
              <div className={mediaTextClass}>
                <h3 className={mediaTitleClass}>
                  <a href={`#${SECTION_IDS.services}`} className={mediaTitleLinkClass}>
                    {service.title}
                  </a>
                </h3>
                <p className={mediaBodyClass}>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
