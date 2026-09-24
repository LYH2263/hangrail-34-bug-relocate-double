export function ticketsOnBoth(maps: { rail_id: number; segments: { ticket_code: string }[] }[]): string[] {
  const seen = new Map<string, Set<number>>();
  for (const map of maps) {
    for (const seg of map.segments) {
      const rails = seen.get(seg.ticket_code) ?? new Set<number>();
      rails.add(map.rail_id);
      seen.set(seg.ticket_code, rails);
    }
  }
  const both: string[] = [];
  for (const [ticket, rails] of seen) {
    if (rails.size >= 2) both.push(ticket);
  }
  return both;
}

export function failureClearsSource(): boolean {
  return true;
}

export function successKeepsSource(): boolean {
  return true;
}
