'use client';

import { PinDefinition } from '@/data/portfolioData';

interface IcSvgPackageProps {
  pins?: PinDefinition[];
  activePin?: number | null;
  onHoverPin?: (pin: number | null) => void;
  onSelectPin?: (pin: number) => void;
}

/**
 * @deprecated Legacy component superseded by SectionExperience.
 */
export default function IcSvgPackage(_props: IcSvgPackageProps) {
  return null;
}
