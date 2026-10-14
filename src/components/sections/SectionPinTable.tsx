'use client';

import { PinDefinition } from '@/data/portfolioData';

interface SectionPinTableProps {
  pins?: PinDefinition[];
  activePin?: number | null;
  onHoverPin?: (pin: number | null) => void;
  onSelectPin?: (pin: number) => void;
}

/**
 * @deprecated Legacy component superseded by SectionExperience.
 */
export default function SectionPinTable(_props: SectionPinTableProps) {
  return null;
}
