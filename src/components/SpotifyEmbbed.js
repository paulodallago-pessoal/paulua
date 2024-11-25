const SpotifyEmbbed = () => {
  return (
    <div className="col">
      <iframe
        title="spotifyEmbbed"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5IxSg6aZlkb0SAIStCszoc?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbbed;
