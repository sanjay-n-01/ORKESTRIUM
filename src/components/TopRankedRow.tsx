import React from 'react';
import { motion } from 'motion/react';
import { SymposiumEvent } from '../types/symposium';
import { Play, Plus, Check, Info } from 'lucide-react';

interface TopRankedRowProps {
  events: SymposiumEvent[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectEvent: (event: SymposiumEvent) => void;
  onShowToast: (msg: string) => void;
}

export const TopRankedRow: React.FC<TopRankedRowProps> = ({
  events,
  bookmarkedIds,
  onToggleBookmark,
  onSelectEvent,
  onShowToast,
}) => {
  // Sort events by match score
  const rankedEvents = [...events].sort((a, b) => b.matchScore - a.matchScore);

  // We no longer need manual scroll since it's an auto-looping marquee

  const EVENT_CARD_IMAGES: Record<string, string> = {
    'paper-spark': '/assets/posters/Paperfusion_card.jpeg',
    'brainiacs-battle': '/assets/posters/ClashFlix_card.jpeg',
    'techno-connect': '/assets/posters/Beyond_limits_card.jpeg',
    'techno-ads': '/assets/posters/Brandblitz_card.jpeg',
    'techno-treasure': '/assets/posters/VoyageX_card.jpeg',
  };

  const getCardImage = (ev: SymposiumEvent) => {
    if (EVENT_CARD_IMAGES[ev.id]) return EVENT_CARD_IMAGES[ev.id];
    const n = ev.name.toLowerCase();
    if (n.includes('paper')) return '/assets/posters/Paperfusion_card.jpeg';
    if (n.includes('clash')) return '/assets/posters/ClashFlix_card.jpeg';
    if (n.includes('beyond') || n.includes('limit')) return '/assets/posters/Beyond_limits_card.jpeg';
    if (n.includes('brand')) return '/assets/posters/Brandblitz_card.jpeg';
    if (n.includes('voyage')) return '/assets/posters/VoyageX_card.jpeg';
    return ev.image || '/assets/posters/Paperfusion_card.jpeg';
  };

  return (
    <motion.section
      id="top5"
      className="relative py-6 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase">
              Top 5 Arenas in Orkestrim Today
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Official Symposium Lineup · Live Match Scores
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5">
            {/* Arrows removed since cards scroll automatically */}
          </div>
        </div>

        {/* Auto-scrolling Marquee */}
        <div className="flex overflow-hidden group py-4">
          {/* First set of cards */}
          <div className="flex animate-marquee gap-6 pr-6 w-max items-stretch">
            {rankedEvents.slice(0, 5).map((event, idx) => {
              const rank = idx + 1;
              const match = event.matchScore;
              const inList = bookmarkedIds.includes(event.id);

              return (
                <div
                  key={event.id}
                  className="group/card relative flex-none w-64 sm:w-72 flex items-center select-none"
                >
                  <div
                    className={`stroke-numeral font-display text-[150px] sm:text-[180px] font-black leading-none absolute bottom-0 z-0 pointer-events-none select-none ${
                      rank === 1 ? 'left-3 sm:left-5' : '-left-2 sm:-left-4'
                    }`}
                  >
                    {rank}
                  </div>
                  <div
                    onClick={() => onSelectEvent(event)}
                    className="relative z-10 ml-12 sm:ml-16 w-full bg-[#181818] border border-white/15 rounded-lg overflow-hidden shadow-xl shadow-black/80 hover:border-[#E50914] hover:shadow-[0_12px_35px_rgba(229,9,20,0.35)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40 bg-[#121212] overflow-hidden">
                      <img
                        src={getCardImage(event)}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30 pointer-events-none" />
                      <span className="absolute top-2 left-2 z-20 text-[10px] font-black tracking-wider bg-[#E50914] text-white px-1.5 py-0.5 rounded shadow">
                        TOP {rank}
                      </span>
                    </div>
                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between bg-[#181818]">
                      <div>
                        <h3 className="font-bebas text-xl text-white tracking-wide truncate">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <span className="text-emerald-400 font-extrabold">{match}% Match</span>
                          <span className="text-neutral-500">·</span>
                          <span className="text-[10px] text-neutral-300 border border-white/20 px-1 rounded">
                            {event.rating}
                          </span>
                          <span className="text-neutral-500">·</span>
                          <span className="text-neutral-400 text-[11px]">{event.duration}</span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-2 pt-2 border-t border-white/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => onSelectEvent(event)}
                          className="w-8 h-8 rounded-full bg-white text-black hover:bg-[#E50914] hover:text-white flex items-center justify-center transition-colors shadow-md"
                          title="View Arena & Register"
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onToggleBookmark(event.id);
                            onShowToast(inList ? "Removed from My List" : "✓ Added to My List");
                          }}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            inList ? 'bg-[#E50914] text-white border-[#E50914]' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black'
                          }`}
                          title="Bookmark Arena"
                        >
                          {inList ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectEvent(event)}
                          className="ml-auto w-8 h-8 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-all"
                          title="More Information"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Duplicated set for seamless loop */}
          <div className="flex animate-marquee gap-6 pr-6 w-max items-stretch" aria-hidden="true">
            {rankedEvents.slice(0, 5).map((event, idx) => {
              const rank = idx + 1;
              const match = event.matchScore;
              const inList = bookmarkedIds.includes(event.id);

              return (
                <div
                  key={`dup-${event.id}`}
                  className="group/card relative flex-none w-64 sm:w-72 flex items-center select-none"
                >
                  <div
                    className={`stroke-numeral font-display text-[150px] sm:text-[180px] font-black leading-none absolute bottom-0 z-0 pointer-events-none select-none ${
                      rank === 1 ? 'left-3 sm:left-5' : '-left-2 sm:-left-4'
                    }`}
                  >
                    {rank}
                  </div>
                  <div
                    onClick={() => onSelectEvent(event)}
                    className="relative z-10 ml-12 sm:ml-16 w-full bg-[#181818] border border-white/15 rounded-lg overflow-hidden shadow-xl shadow-black/80 hover:border-[#E50914] hover:shadow-[0_12px_35px_rgba(229,9,20,0.35)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative h-40 bg-[#121212] overflow-hidden">
                      <img
                        src={getCardImage(event)}
                        alt={event.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30 pointer-events-none" />
                      <span className="absolute top-2 left-2 z-20 text-[10px] font-black tracking-wider bg-[#E50914] text-white px-1.5 py-0.5 rounded shadow">
                        TOP {rank}
                      </span>
                    </div>
                    <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between bg-[#181818]">
                      <div>
                        <h3 className="font-bebas text-xl text-white tracking-wide truncate">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          <span className="text-emerald-400 font-extrabold">{match}% Match</span>
                          <span className="text-neutral-500">·</span>
                          <span className="text-[10px] text-neutral-300 border border-white/20 px-1 rounded">
                            {event.rating}
                          </span>
                          <span className="text-neutral-500">·</span>
                          <span className="text-neutral-400 text-[11px]">{event.duration}</span>
                        </div>
                      </div>
                      <div
                        className="flex items-center gap-2 pt-2 border-t border-white/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => onSelectEvent(event)}
                          className="w-8 h-8 rounded-full bg-white text-black hover:bg-[#E50914] hover:text-white flex items-center justify-center transition-colors shadow-md"
                          title="View Arena & Register"
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onToggleBookmark(event.id);
                            onShowToast(inList ? "Removed from My List" : "✓ Added to My List");
                          }}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                            inList ? 'bg-[#E50914] text-white border-[#E50914]' : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black'
                          }`}
                          title="Bookmark Arena"
                        >
                          {inList ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectEvent(event)}
                          className="ml-auto w-8 h-8 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-all"
                          title="More Information"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
