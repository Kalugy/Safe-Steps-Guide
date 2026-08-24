import { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Circle,
  Polyline,
  Popup,
  Tooltip,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BookOpen } from 'lucide-react';
import {
  COLOMBIA_BOUNDS,
  COLOMBIA_CENTER,
  disasterHistory,
  earthquakePoints,
  floodRegions,
  getHistoryKindMeta,
  historyYears,
  mapContent,
  mountainRanges,
  volcanoPoints,
  type HistoryEvent,
  type MapLayerId,
} from '../content/mapData';

const defaultLayers: Record<MapLayerId, boolean> = {
  mountains: true,
  earthquakes: false,
  volcanoes: false,
  floods: false,
};

function magnitudeRadius(magnitude?: number) {
  if (!magnitude) return 10;
  return Math.max(8, Math.min(22, magnitude * 2.4));
}

function FlyToEvent({ event }: { event: HistoryEvent | null }) {
  const map = useMap();

  useEffect(() => {
    if (!event) return;
    map.flyTo([event.lat, event.lng], event.zoom, { duration: 1.15 });
  }, [event, map]);

  return null;
}

export function MapPage() {
  const [layers, setLayers] = useState(defaultLayers);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all');

  const selectedEvent = useMemo(
    () => disasterHistory.find((event) => event.id === selectedId) ?? null,
    [selectedId],
  );

  const filteredHistory = useMemo(() => {
    if (yearFilter === 'all') return disasterHistory;
    return disasterHistory.filter((event) => event.year === yearFilter);
  }, [yearFilter]);

  const activeCount = useMemo(
    () => Object.values(layers).filter(Boolean).length,
    [layers],
  );

  const toggle = (id: MapLayerId) => {
    setLayers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const focusEvent = (event: HistoryEvent) => {
    setSelectedId(event.id);
    setLayers((prev) => ({
      ...prev,
      mountains: true,
      [event.layer]: true,
    }));
  };

  return (
    <div className="flex flex-col min-h-[calc(100dvh-2.15rem)] bg-background">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 pt-5 pb-4">
        <h1 className="text-[1.75rem] md:text-3xl font-bold tracking-tight text-foreground mb-2">
          {mapContent.title}
        </h1>
        <p className="text-[1rem] md:text-lg text-foreground/75 leading-relaxed max-w-3xl mb-4">
          {mapContent.subtitle} También puedes recorrer el historial y ver cada evento en el mapa.
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {mapContent.layers.map((layer) => {
            const active = layers[layer.id];
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => toggle(layer.id)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.9rem] font-semibold border transition-all ${
                  active
                    ? 'text-white border-transparent shadow-sm'
                    : 'bg-card text-foreground/80 border-border hover:bg-secondary/50'
                }`}
                style={active ? { backgroundColor: layer.color } : undefined}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: active ? '#fff' : layer.color }}
                />
                {layer.label}
                <span className={`text-[0.7rem] font-medium ${active ? 'opacity-90' : 'text-muted-foreground'}`}>
                  {layer.hint}
                </span>
              </button>
            );
          })}
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.9rem] font-semibold border border-primary/30 bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            <BookOpen size={16} strokeWidth={2.5} />
            Guías
          </Link>
        </div>

        <p className="text-[0.85rem] text-muted-foreground leading-relaxed max-w-3xl">
          {activeCount === 1 && layers.mountains && !selectedEvent
            ? 'Mapa base con cordilleras. Activa capas o elige un evento del historial.'
            : mapContent.note}
        </p>
      </div>

      <div className="flex-1 px-3 md:px-8 pb-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-4 items-start">
          <div className="min-w-0">
            <div className="h-[min(58dvh,560px)] md:h-[min(68dvh,640px)] rounded-[1.25rem] overflow-hidden border border-border shadow-sm relative z-0">
              <MapContainer
                center={COLOMBIA_CENTER}
                zoom={6}
                minZoom={5}
                maxZoom={12}
                maxBounds={COLOMBIA_BOUNDS}
                maxBoundsViscosity={0.85}
                scrollWheelZoom
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
                <FlyToEvent event={selectedEvent} />

                {layers.mountains &&
                  mountainRanges.map((range) => (
                    <Polyline
                      key={range.id}
                      positions={range.path}
                      pathOptions={{
                        color: '#5c6b4a',
                        weight: 4,
                        opacity: 0.85,
                      }}
                    >
                      <Popup>
                        <strong>{range.name}</strong>
                        <p className="mt-1 mb-0 text-sm leading-snug">{range.summary}</p>
                      </Popup>
                      <Tooltip sticky>{range.name}</Tooltip>
                    </Polyline>
                  ))}

                {layers.floods &&
                  floodRegions.map((region) => (
                    <Circle
                      key={region.id}
                      center={[region.lat, region.lng]}
                      radius={region.radiusKm * 1000}
                      pathOptions={{
                        color: '#2f6f8f',
                        fillColor: '#2f6f8f',
                        fillOpacity: 0.18,
                        weight: 2,
                      }}
                    >
                      <Popup>
                        <strong>{region.name}</strong>
                        <p className="mt-1 mb-1 text-sm leading-snug">{region.summary}</p>
                        <p className="mb-0 text-xs opacity-70">Fuente: {region.source}</p>
                      </Popup>
                    </Circle>
                  ))}

                {layers.earthquakes &&
                  earthquakePoints.map((quake) => {
                    const highlighted =
                      selectedEvent?.kind === 'earthquake' &&
                      Math.abs(selectedEvent.lat - quake.lat) < 0.35 &&
                      Math.abs(selectedEvent.lng - quake.lng) < 0.35;
                    return (
                      <CircleMarker
                        key={quake.id}
                        center={[quake.lat, quake.lng]}
                        radius={magnitudeRadius(quake.magnitude) + (highlighted ? 4 : 0)}
                        pathOptions={{
                          color: highlighted ? '#7a2e0d' : '#c45c26',
                          fillColor: highlighted ? '#ea7a3a' : '#c45c26',
                          fillOpacity: highlighted ? 0.85 : 0.55,
                          weight: highlighted ? 3 : 2,
                        }}
                      >
                        <Popup>
                          <strong>{quake.name}</strong>
                          {(quake.year || quake.magnitude) && (
                            <p className="mt-1 mb-1 text-sm font-semibold">
                              {[quake.year, quake.magnitude ? `M ${quake.magnitude}` : null]
                                .filter(Boolean)
                                .join(' · ')}
                            </p>
                          )}
                          <p className="mt-1 mb-1 text-sm leading-snug">{quake.summary}</p>
                          <p className="mb-0 text-xs opacity-70">Fuente: {quake.source}</p>
                        </Popup>
                        <Tooltip direction="top" offset={[0, -4]} opacity={0.95}>
                          {quake.name}
                        </Tooltip>
                      </CircleMarker>
                    );
                  })}

                {layers.volcanoes &&
                  volcanoPoints.map((volcano) => {
                    const highlighted =
                      selectedEvent?.kind === 'volcano' &&
                      Math.abs(selectedEvent.lat - volcano.lat) < 0.5 &&
                      Math.abs(selectedEvent.lng - volcano.lng) < 0.5;
                    return (
                      <CircleMarker
                        key={volcano.id}
                        center={[volcano.lat, volcano.lng]}
                        radius={highlighted ? 15 : 11}
                        pathOptions={{
                          color: highlighted ? '#5c1010' : '#9b2d2d',
                          fillColor: '#9b2d2d',
                          fillOpacity: highlighted ? 0.9 : 0.7,
                          weight: highlighted ? 3 : 2,
                        }}
                      >
                        <Popup>
                          <strong>{volcano.name}</strong>
                          <p className="mt-1 mb-1 text-sm leading-snug">{volcano.summary}</p>
                          <p className="mb-0 text-xs opacity-70">Fuente: {volcano.source}</p>
                        </Popup>
                        <Tooltip direction="top" offset={[0, -4]} opacity={0.95}>
                          {volcano.name}
                        </Tooltip>
                      </CircleMarker>
                    );
                  })}

                {selectedEvent && (
                  <CircleMarker
                    center={[selectedEvent.lat, selectedEvent.lng]}
                    radius={16}
                    pathOptions={{
                      color: getHistoryKindMeta(selectedEvent.kind).color,
                      fillColor: getHistoryKindMeta(selectedEvent.kind).color,
                      fillOpacity: 0.35,
                      weight: 3,
                    }}
                  >
                    <Popup>
                      <strong>{selectedEvent.title}</strong>
                      <p className="mt-1 mb-1 text-sm font-semibold">{selectedEvent.dateLabel}</p>
                      <p className="mt-1 mb-1 text-sm leading-snug">{selectedEvent.summary}</p>
                      <p className="mb-0 text-xs opacity-70">Fuente: {selectedEvent.source}</p>
                    </Popup>
                  </CircleMarker>
                )}
              </MapContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-[0.8rem]">
              {mapContent.layers.map((layer) => (
                <div
                  key={layer.id}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-3 py-2"
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="font-semibold text-foreground">{layer.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-card border border-border rounded-[1.25rem] shadow-sm p-4 md:p-5 lg:sticky lg:top-14">
            <h2 className="text-[1.2rem] font-bold tracking-tight text-foreground mb-1">
              Historial
            </h2>
            <p className="text-[0.9rem] text-foreground/70 leading-relaxed mb-4">
              Elige un año o un evento. El mapa se mueve hasta el lugar y muestra un resumen.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              <button
                type="button"
                onClick={() => setYearFilter('all')}
                className={`px-2.5 py-1 rounded-full text-[0.75rem] font-bold transition-colors ${
                  yearFilter === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/80 text-foreground/70 hover:text-foreground'
                }`}
              >
                Todos
              </button>
              {historyYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setYearFilter(year)}
                  className={`px-2.5 py-1 rounded-full text-[0.75rem] font-bold transition-colors ${
                    yearFilter === year
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary/80 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {selectedEvent && (
              <div className="mb-4 rounded-[1rem] bg-primary/10 border border-primary/10 p-3.5">
                <p className="text-[0.7rem] font-bold uppercase tracking-wide text-primary mb-1">
                  {getHistoryKindMeta(selectedEvent.kind).label}
                  {selectedEvent.magnitude ? ` · M ${selectedEvent.magnitude}` : ''}
                </p>
                <p className="text-[1.05rem] font-bold text-foreground leading-snug">
                  {selectedEvent.title}
                </p>
                <p className="text-[0.85rem] font-semibold text-foreground/75 mt-1">
                  {selectedEvent.dateLabel} · {selectedEvent.place}
                </p>
                <p className="text-[0.9rem] text-foreground/80 leading-relaxed mt-2">
                  {selectedEvent.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="mt-3 text-[0.8rem] font-semibold text-primary underline underline-offset-2"
                >
                  Quitar selección
                </button>
              </div>
            )}

            <ul className="flex flex-col gap-2 max-h-[min(48dvh,420px)] overflow-y-auto pr-1">
              {filteredHistory.map((event) => {
                const meta = getHistoryKindMeta(event.kind);
                const active = selectedId === event.id;
                return (
                  <li key={event.id}>
                    <button
                      type="button"
                      onClick={() => focusEvent(event)}
                      className={`w-full text-left rounded-[1rem] border p-3 transition-all ${
                        active
                          ? 'border-primary bg-primary/10 shadow-sm'
                          : 'border-border bg-background hover:bg-secondary/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[0.65rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: meta.color }}
                        >
                          {meta.label}
                        </span>
                        <span className="text-[0.75rem] font-bold text-muted-foreground">
                          {event.year}
                        </span>
                      </div>
                      <p className="text-[0.95rem] font-bold text-foreground leading-snug">
                        {event.title}
                      </p>
                      <p className="text-[0.8rem] text-foreground/65 mt-0.5">
                        {event.dateLabel} · {event.place}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
