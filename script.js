const groups = [
  { id: 'tamr-grid', directory: 'tamr', files: Array.from({ length: 20 }, (_, i) => `${String.fromCharCode(65 + i)}.mp4`), label: 'TAMR retargeted result' },
  { id: 'with-tfeacg-grid', directory: 't-feacg/with', files: Array.from({ length: 5 }, (_, i) => `${String(i + 1).padStart(2, '0')}.mp4`), label: 'Result with T-FeaCG' },
  { id: 'without-tfeacg-grid', directory: 't-feacg/without', files: Array.from({ length: 5 }, (_, i) => `${String(i + 1).padStart(2, '0')}.mp4`), label: 'Result without T-FeaCG' },
];

for (const group of groups) {
  const grid = document.getElementById(group.id);
  for (const file of group.files) {
    const card = document.createElement('article');
    card.className = 'video-card';
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;
    video.setAttribute('aria-label', group.label);
    const source = document.createElement('source');
    source.src = `assets/videos/${group.directory}/${encodeURIComponent(file)}`;
    source.type = 'video/mp4';
    video.appendChild(source);
    card.appendChild(video);
    grid.appendChild(card);
  }
}
