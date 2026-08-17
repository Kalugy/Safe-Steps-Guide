import { duringContent } from '../content/data';
import { HubPage } from './Hub';

export function Home() {
  return <HubPage content={duringContent} />;
}
