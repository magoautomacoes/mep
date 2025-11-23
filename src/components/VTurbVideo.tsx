import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
interface VTurbEvent { type: string; detail: any }
interface VTurbPlayer extends HTMLElement { config?: any; setup?: any; fullscreen?: boolean; _fullscreen?: boolean; fullscreenMode?: boolean }

type Props = {
  accountId: string;
  playerId: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function VTurbVideo({ accountId, playerId, className = "", style }: Props) {
  const loadedRef = useRef(false);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playerState, setPlayerState] = useState<any>(null);

  useEffect(() => {
    const selector = `script[src*="${playerId}"]`;
    const existing = document.querySelector(selector);
    if (existing || loadedRef.current) return;

    (window as any).vturbDebug = true;

    const s = document.createElement("script");
    s.src = `https://scripts.converteai.net/${accountId}/players/${playerId}/v4/player.js`;
    s.async = true;
    s.onload = () => {
      loadedRef.current = true;
      console.log('[VTurb] Script loaded');
      setTimeout(() => {
        const player = document.getElementById(`vid-${playerId}`);
        if (player) {
          console.log('[VTurb] Player element found:', player);
          console.log('[VTurb] Player config:', (player as any).config);
          console.log('[VTurb] Player setup:', (player as any).setup);
          
          player.addEventListener('fullscreenchange', () => {
            console.log('[VTurb] Fullscreen change detected');
            setIsFullscreen(!!document.fullscreenElement);
          });
          
          player.addEventListener('vturb-ready', (e: any) => {
            console.log('[VTurb] VTurb ready event:', e.detail);
            setPlayerState(e.detail);
          });
          
          player.addEventListener('vturb-play', (e: any) => {
            console.log('[VTurb] VTurb play event:', e.detail);
            setPlayerState(prev => ({ ...prev, isPlaying: true }));
          });
          
          player.addEventListener('vturb-pause', (e: any) => {
            console.log('[VTurb] VTurb pause event:', e.detail);
            setPlayerState(prev => ({ ...prev, isPlaying: false }));
          });
          
          player.addEventListener('vturb-ended', (e: any) => {
            console.log('[VTurb] VTurb ended event:', e.detail);
            setPlayerState(prev => ({ ...prev, isEnded: true, isPlaying: false }));
          });
          
          player.addEventListener('vturb-fullscreen-enter', (e: any) => {
            console.log('[VTurb] VTurb fullscreen enter:', e.detail);
            setIsFullscreen(true);
          });
          
          player.addEventListener('vturb-fullscreen-exit', (e: any) => {
            console.log('[VTurb] VTurb fullscreen exit:', e.detail);
            setIsFullscreen(false);
          });
          
          setTimeout(() => {
            const playerAny = player as VTurbPlayer;
            console.log('[VTurb] Player internal methods:', {
              fullscreen: playerAny.fullscreen,
              _fullscreen: playerAny._fullscreen,
              fullscreenMode: playerAny.fullscreenMode,
              requestFullscreen: typeof playerAny.requestFullscreen,
              webkitRequestFullscreen: typeof (playerAny as any).webkitRequestFullscreen,
              mozRequestFullScreen: typeof (playerAny as any).mozRequestFullScreen
            });
            
            const playerProps = Object.keys(playerAny);
            const fullscreenProps = playerProps.filter(prop => 
              prop.toLowerCase().includes('fullscreen') || 
              prop.toLowerCase().includes('screen')
            );
            console.log('[VTurb] Fullscreen-related properties:', fullscreenProps);
          }, 1000);
          
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const playerAny = player as any;
                console.log('[VTurb] Player class changed:', player.className);
                console.log('[VTurb] Player fullscreen class:', player.classList.contains('fullscreen'));
                console.log('[VTurb] Player has fullscreen:', playerAny.fullscreen);
                console.log('[VTurb] Player requestFullscreen available:', typeof playerAny.requestFullscreen);
                if (player.classList.contains('ios-fullscreen')) {
                  console.log('[VTurb] iOS fullscreen class detected');
                }
                if (player.classList.contains('mobile-fullscreen')) {
                  console.log('[VTurb] Mobile fullscreen class detected');
                }
              }
            });
          });
          
          observer.observe(player, {
            attributes: true,
            attributeFilter: ['class', 'style']
          });
          
          (player as any)._vturbObserver = observer;
          
          setTimeout(() => {
            if ((player as any).setup) {
              console.log('[VTurb] Player setup available');
            } else {
              console.log('[VTurb] Player setup not available yet');
            }
          }, 1000);
        } else {
          console.error('[VTurb] Player element not found');
        }
      }, 500);
    };
    s.onerror = (e) => {
      console.error('[VTurb] Script load error:', e);
    };
    document.head.appendChild(s);

    return () => {
      if (s.parentNode) s.parentNode.removeChild(s);
    };
  }, [accountId, playerId]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      console.log('[VTurb] Document fullscreen change:', document.fullscreenElement);
      const player = document.getElementById(`vid-${playerId}`);
      if (player) {
        console.log('[VTurb] Player in fullscreen:', document.fullscreenElement === player);
        console.log('[VTurb] Player styles:', window.getComputedStyle(player));
        const playerAny = player as any;
        if (playerAny.fullscreen) {
          console.log('[VTurb] Player has fullscreen method');
        }
        if (playerAny.requestFullscreen) {
          console.log('[VTurb] Player has requestFullscreen method');
        }
        if (playerAny._fullscreen || playerAny.fullscreenMode) {
          console.log('[VTurb] Player internal fullscreen state:', playerAny._fullscreen || playerAny.fullscreenMode);
        }
        if (window.innerWidth < 768) {
          console.log('[VTurb] Mobile viewport detected');
          console.log('[VTurb] Viewport meta:', document.querySelector('meta[name="viewport"]'));
          console.log('[VTurb] Window orientation:', (window as any).orientation);
        }
        setIsFullscreen(!!document.fullscreenElement);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Also monitor webkit fullscreen for iOS
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, [playerId]);

  useEffect(() => {
    const handleOrientationChange = () => {
      console.log('[VTurb] Orientation changed:', window.orientation);
      const player = document.getElementById(`vid-${playerId}`);
      if (player) {
        console.log('[VTurb] Player after orientation change:', player);
        console.log('[VTurb] Player bounding rect:', player.getBoundingClientRect());
        if (player.classList.contains('fullscreen')) {
          console.log('[VTurb] Player has fullscreen class after orientation');
        }
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          console.log('[VTurb] Viewport content:', viewport.getAttribute('content'));
        }
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [playerId]);

  useEffect(() => {
    const handleResize = () => {
      console.log('[VTurb] Window resized:', {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768
      });
      const player = document.getElementById(`vid-${playerId}`);
      if (player) {
        console.log('[VTurb] Player after resize:', {
          rect: player.getBoundingClientRect(),
          classList: player.className,
          hasFullscreen: player.classList.contains('fullscreen')
        });
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [playerId]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const player = document.getElementById(`vid-${playerId}`);
      if (player && player.contains(e.target as Node)) {
        console.log('[VTurb] Touch on player detected');
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [playerId]);

  return (
    <div
      className={className}
      style={style}
      ref={playerRef}
      data-vturb-player-id={playerId}
      data-vturb-account-id={accountId}
      data-vturb-fullscreen={isFullscreen}
      data-vturb-state={JSON.stringify(playerState)}
    >
      <vturb-smartplayer 
        id={`vid-${playerId}`} 
        style={{ display: 'block', width: '100%', aspectRatio: '16 / 9' }}
      />
      <Helmet>
        <script type="text/javascript">{`
          (function(){
            var sel = "script[src*='players/${playerId}/v4/player.js']";
            if (!document.querySelector(sel)) {
              var s=document.createElement('script');
              s.src='https://scripts.converteai.net/${accountId}/players/${playerId}/v4/player.js';
              s.async=true; document.head.appendChild(s);
            }
          })();
        `}</script>
      </Helmet>
    </div>
  );
}